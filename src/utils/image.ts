/* Image utilities */

import sharp from 'sharp';

export const resizeImage = async (inputPath: string, outputPath: string, width: number, height: number): Promise<void> => {
  await sharp(inputPath)
    .resize(width, height)
    .toFile(outputPath);
};

export const convertImageFormat = async (inputPath: string, outputPath: string, format: string): Promise<void> => {
  await sharp(inputPath)
    .toFormat(format)
    .toFile(outputPath);
};