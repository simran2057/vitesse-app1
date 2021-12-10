<template>
  <div class="border px-3 py-3 w-1/4 m-auto rounded">
    <router-view />
    <form action="#" class="space-y-6 font-sans">
      <h1 class="text-2xl font-bold text-black ">REGISTER</h1>
      <input class=" px-4 py-2 w-full border rounded-md focus:ring focus:outline-none" type="text" name="name" placeholder="Username" required ><br>
      <input class=" px-4 py-2 w-full border rounded-md focus:ring focus:outline-none" type="email" name="email" placeholder="Email Address" required ><br>
      <input class=" px-4 py-2 w-full border rounded-md focus:outline-none focus:ring" type="password" name="password" placeholder="Password" required >
      <input class=" px-4 py-2 w-full border rounded-md focus:outline-none focus:ring" type="password" name="password" placeholder="Confirm Password" required >
      <div class="flex text-center items-center justify-between ">
        <label class="flex items-center">
          <div class="relative inline-flex items-center">
            <input
              type="checkbox"
              name="remembr_me"
              class="w-10 h-4 transition bg-gray-200 border-none rounded-full shadow-inner outline-none appearance-none  toggle checked:bg-blue-500 disabled:bg-gray-200 focus:outline-none"
            >
            <span class="dot absolute top-0  w-5 h-4 transition-all bg-white rounded-full shadow-sm " />
          </div>
          <span class="ml-3 text-sm font-normal text-white-500">I accept the
            <a href="#" class="text-blue-600 hover:underline text-sm"> Terms and Condition</a>
          </span>
        </label>
      </div>
      <div>
        <button
          type="submit"
          class="l px-4 py-2  font-medium text-center w-full text-white transition-colors duration-200 bg-blue-500 rounded-md  hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Register
        </button>
      </div>
      <div class="flex items-center justify-center space-x-2 flex-nowrap">
        <span class="w-20 h-px bg-gray-300" />
        <span>OR</span>
        <span class="w-20 h-px bg-gray-300" />
      </div>
      <a href="#" class="flex items-center justify-center px-4 py-2 space-x-2 text-white transition-all duration-200 bg-black rounded-md  hover:bg-opacity-80 focus:outline-none focus:ring">
        <GithubIcon aria-hidden="true" class="w-6 h-6 text-white" />
        <span> Register using github </span>
      </a>
      <div class="text-sm text-gray-600">
        Already have an account yet? &nbsp;
        <router-link to="/login" active-class="active" tag="button">
          <span class="text-blue-600 hover:underline">
            Login
          </span>
        </router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: blue;
}

</style>
