import express, { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { verifyToken, isAdmin } from '../middleware/authMiddleware';
import { createProduct, updateProduct, deleteProduct, getProduct, getProducts } from '../controllers/productController';

const router = express.Router();

// Middleware for validating request inputs
const validateProduct = [
  body('name').isString().notEmpty().withMessage('Product name is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0'),
  body('description').isString().optional(),
  body('category').isString().notEmpty().withMessage('Category is required'),
];

// Error handling middleware
function handleValidationErrors(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

// Route to create a new product
router.post('/', verifyToken, isAdmin, validateProduct, handleValidationErrors, async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update an existing product
router.put('/:id', verifyToken, isAdmin, validateProduct, handleValidationErrors, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await updateProduct(id, req.body);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete a product
router.delete('/:id', verifyToken, isAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const success = await deleteProduct(id);
    if (!success) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get a specific product
router.get('/:id', param('id').isUUID().withMessage('Invalid product ID'), handleValidationErrors, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await getProduct(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error retrieving product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all products
router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
