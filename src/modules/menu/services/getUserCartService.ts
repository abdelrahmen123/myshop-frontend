const getUserCartApiCall = async (token: string) => {
  try {
    if (token) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/user-cart`,
        {
          method: "GET", // أو POST أو أي طريقة HTTP أخرى حسب الحاجة
          headers: {
            Authorization: `Bearer ${token}`, // إرسال التوكن في رأس Authorization
            "Content-Type": "application/json", // إضافة رأس نوع المحتوى إذا كان مطلوبًا
          },
        }
      );

      return response.json();
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getUserCartApiCall;
