import {RouterLink} from 'vue-router'
<template>
  <div class="border m-auto w-full mt-30 px-3 py-3 rounded md:h-full lg:h-full lg:w-1/4">
    <form action="#" class="space-y-6 m-auto font-sans">
      <h1 class="2xl:text-2xl sm:text-6xl text-center font-bold text-black pt-6 ">LOG-IN</h1>
      <input class=" 2xl:px-4 2xl:py-2  w-full border rounded-md focus:outline-none focus:ring " type="email" name="email" placeholder="Email address" required ><br>
      <input class=" px-4 py-2 w-full border rounded-md focus:outline-none focus:ring" type="password" name="password" placeholder="Password" required >
      <div class="flex text-center items-center justify-between ml-15 ">
        <label class="flex items-center">
          <div class="relative inline-flex items-center">
            <input
              type="checkbox"
              name="remembr_me"
              class="w-10 h-4 transition bg-gray-200 border-none rounded-full shadow-inner outline-none appearance-none absolute -ml-15  toggle checked:bg-blue-500 disabled:bg-gray-200 focus:outline-none"
            >
            <span class="dot absolute left-0 -ml-15  w-5 h-4 transition-all transform scale-150 bg-white rounded-full focus:outline-none shadow-sm "></span>
          </div>
        </label>
        <span class="text-sm font-normal text-gray-500 -ml-16">Remember me</span>
        <a href="#" class="text-sm text-blue-600 hover:underline">Forget Password?</a>
      </div>
      <div>
        <button
          type="submit"
          class="w-full px-4 py-2  font-medium text-center text-white transition-colors duration-200 bg-blue-500 rounded-md  hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Login
        </button>
      </div>
      <div class="flex items-center justify-center space-x-2 flex-nowrap">
        <span class="w-20 h-px bg-gray-300"></span>
        <span>OR</span>
        <span class="w-20 h-px bg-gray-300"></span>
      </div>
      <a href="#" class="flex items-center justify-center px-4 py-2 space-x-2 text-white transition-all duration-200 bg-black rounded-md  hover:bg-opacity-80 focus:outline-none focus:ring">
        <GithubIcon aria-hidden="true" class="w-6 h-6 text-white" />
        <span> Login with github </span>
      </a>
      <div class="text-sm text-gray-600">
        Don't have an account yet? &nbsp;
        <router-link to="/register" active-class="active" tag="button">
          <span class="text-blue-600 hover:underline">
            Register
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
