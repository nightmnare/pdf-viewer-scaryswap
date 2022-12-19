function App() {
  return (
    <div className="bg-background w-full min-h-screen flex flex-col items-center ">
      <iframe
        className="w-full flex-1 block"
        src={`${window.location.href}pdfs/docs.pdf`}
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
    </div>
  );
}

export default App;
