
export const handleLogout= () => {
    try {
      // Clear user data from localStorage
      localStorage.removeItem('userData');
  
    
      window.location.href = '/';
    } catch (err) {
      console.error(err);
      
    }
  };