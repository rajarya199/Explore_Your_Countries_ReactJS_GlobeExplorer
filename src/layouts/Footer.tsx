
const Footer = () => {
  return (
    <>
        <footer className="bg-white dark:bg-gray-900 shadow-inner py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>GlobalExplorer &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer