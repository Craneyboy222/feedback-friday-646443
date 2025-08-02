export const formatResponse = (response: any) => {
  try {
    return JSON.stringify(response, null, 2);
  } catch (error) {
    console.error('Error formatting response:', error);
    throw new Error('Response formatting failed');
  }
};

export const formatPhoneNumber = (phoneNumber: string) => {
  try {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  } catch (error) {
    console.error('Error formatting phone number:', error);
    throw new Error('Phone number formatting failed');
  }
};