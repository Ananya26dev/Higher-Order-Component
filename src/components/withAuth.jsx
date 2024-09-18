const withAuth = (Component) => {
  const isAuthenticated = false;
  return function (props) {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return (
        <>
          <div className="container">
            <p className="auth-failed">Please Login to Access.</p>
          </div>
        </>
      );
    }
  };
};
export default withAuth;
