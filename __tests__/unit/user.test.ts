import { UserService } from '../src/services/UserService';
import { mockUser } from '../test-utils/mocks';

describe('Advanced UserService', () => {
  test('should handle user update with validation', async () => {
    const updatedUser = await UserService.update('1', { name: 'Updated Name' });
    expect(updatedUser.name).toBe('Updated Name');
    expect(updatedUser.updatedAt).toBeDefined();
  });
});