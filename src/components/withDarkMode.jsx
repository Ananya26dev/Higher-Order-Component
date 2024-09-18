const withDarkMode = (Component) => {
  const darkMode = true; // Can be set dynamically

  // Apply dark mode to the full page
  if (darkMode) {
    document.body.style.backgroundColor = "#212529";
  } else {
    document.body.style.backgroundColor = "#f9f9f9";
  }
  return (props) => {
    return (
      <div>
        <Component {...props} />
      </div>
    );
  };
};

export default withDarkMode;
