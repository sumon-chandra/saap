
export const generateUserName = (email: string): string => {
    const [userName] = email.split('@');
    return `@${userName}`;
};
