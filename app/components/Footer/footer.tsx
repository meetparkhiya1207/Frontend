export function Footer() {
    return (
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase">Company Info</h3>
              <ul className="mt-4 space-y-2">
                {["About Us", "Latest Posts", "Contact Us", "Shop"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Help Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase">Help Links</h3>
              <ul className="mt-4 space-y-2">
                {["Tracking", "Order Status", "Delivery", "Shipping Info", "FAQ"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Useful Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase">Useful Links</h3>
              <ul className="mt-4 space-y-2">
                {["Special Offers", "Gift Cards", "Advertising", "Terms of Use"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase">Get in the Know</h3>
              <form className="mt-4">
                <div className="flex flex-col lg:flex-row items-center gap-3">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full lg:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-gray-500 text-center">© 2024 NorthStar eCommerce</p>
          </div>
        </div>
      </footer>
    );
  }  