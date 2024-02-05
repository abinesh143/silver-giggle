const General = () => {
  return (
    <main>
      <div className="py-3">
        <div className="text-2xl font-semibold capitalize mb-2">
          App name and icon
        </div>
        <p>The name and icon that will appear on the app menu user device.</p>
      </div>
      <div className="bg-gray-400 p-6 rounded-lg">
        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-1">
            <div>
              <label
                for="first_name"
                class="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                App Name:
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Crazy Shoppy"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Package name:
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="com.crazy.shopy"
                required
              />
            </div>
            <div>
              <label
                for="company"
                class="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Version name:
              </label>
              <input
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1.0"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Version code:
              </label>
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="11"
                required
              />
            </div>
            <div>
              <label
                for="website"
                class="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Website URL
              </label>
              <input
                type="url"
                id="website"
                class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="flowbite.com"
                required
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              class="block mb-2  font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              App icon: (Launcher)
            </label>
            <input
              class="block w-full  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>

          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ms-2  font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </form>
      </div>
    </main>
  );
};

export default General;
