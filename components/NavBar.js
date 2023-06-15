export default function NavBar() {
  return (
    // <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}> </main>

    <header class="shadow-sm">
      <div class="mx-auto max-w-screen-xl p-4">
        <div class="flex items-center justify-between gap-4 lg:gap-10">
          <div class="flex justify-center lg:w-0 lg:flex-1">
            <a href="/">
              <img src="/logo_blackgreen.png" alt="E-COPS" class="h-8"></img>
              <span class="sr-only">Home</span>
            </a>
          </div>

          <nav
            aria-label="Global"
            class="hidden gap-8 text-sm font-medium md:flex">
            <a class="text-gray-500" href="/">
              Home
            </a>
            <a class="text-gray-500" href="/ranking">
              베스트 대출
            </a>
            <a class="text-gray-500" href="/category">
              카테고리별 도서 보기
            </a>
            <a class="text-gray-500" href="/mypage">
              마이페이지
            </a>
          </nav>

          <div class="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <a
              class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
              href="">
              Log in
            </a>

            <a
              class="rounded-lg bg-green-600 px-5 py-2 text-sm font-medium text-white"
              href="">
              Sign up
            </a>
          </div>

          <div class="lg:hidden">
            <button
              class="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button">
              <span class="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
