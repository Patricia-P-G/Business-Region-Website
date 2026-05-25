<template>
    <section class="w-full bg-white py-15">

        <div class="mx-auto px-12 sm:px-6 lg:px-25">

            <!-- Search -->
            <div class="mt-10 flex justify-center">
                <div
                    class="flex h-12 w-full max-w-[760px] items-center rounded-xl border-2 border-[#12294B] px-5 shadow-sm">

                    <span class="mr-4 text-xl text-[#12294B]">⌕</span>

                    <input type="text" placeholder="Search..."
                        class="w-full bg-transparent text-sm italic text-[#12294B] outline-none placeholder:text-[#12294B]/70" />
                </div>
            </div>

            <!-- Filters -->
            <div class="py-20 grid grid-cols-5 gap-4">

                <button class="rounded-lg bg-[#7C8BDA] py-4 text-sm font-bold uppercase text-white">
                    All
                </button>

                <button class="rounded-lg bg-[#3E5A78] py-4 text-sm font-bold uppercase text-white">
                    Interviews
                </button>

                <button class="rounded-lg bg-[#3E5A78] py-4 text-sm font-bold uppercase text-white">
                    Conference Talks
                </button>

                <button class="rounded-lg bg-[#3E5A78] py-4 text-sm font-bold uppercase text-white">
                    Event Highlights
                </button>

                <button class="rounded-lg bg-[#3E5A78] py-4 text-sm font-bold uppercase text-white">
                    Articles
                </button>

            </div>

            <!-- Cards -->
            <div class="mt-28 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">

                <!-- Card 1 -->
                <article class="overflow-hidden rounded-xl bg-white shadow-lg">

                    <div class="relative h-[170px]">

                        <img src="@/assets/media/card1.png" alt=""
                            class="h-full w-full object-cover" />

                        <span
                            class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-8 py-2 text-xs font-bold uppercase text-white">
                            Interview
                        </span>

                    </div>

                    <div class="px-4 py-5">

                        <h3 class="text-lg font-semibold text-black">
                            Friendly Danes at the negotiating table
                        </h3>

                        <p class="mt-1 text-sm leading-4 text-[#777]">
                            See the interview with Gwyn Nissen Chief Editor for Der Nordschleswiger
                        </p>

                        <div class="mt-8 flex justify-between text-sm text-black">
                            <span>10:03 min</span>

                            <span class="text-right">
                                DK
                                <br />
                                December 2
                            </span>
                        </div>

                    </div>

                </article>

                <!-- Card 2 -->
                <article class="overflow-hidden rounded-xl bg-white shadow-lg">

                    <div class="relative h-[170px]">

                        <img src="@/assets/media/card2.png" alt=""
                            class="h-full w-full object-cover" />

                        <span
                            class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-8 py-2 text-xs font-bold uppercase text-white">
                            Conference
                        </span>

                    </div>

                    <div class="px-4 py-5">

                        <h3 class="text-lg font-semibold text-black">
                            Sharing skills across the border at Eutin Brewery
                        </h3>

                        <p class="mt-1 text-sm leading-4 text-[#777]">
                            40 business leaders met at Eutin Brewery to tackle the skilled worker shortage.
                        </p>

                        <div class="mt-8 flex justify-between text-sm text-black">
                            <span>5:56 min</span>

                            <span class="text-right">
                                DK/DE
                                <br />
                                October 8
                            </span>
                        </div>

                    </div>

                </article>

                <!-- Card 3 -->
                <article class="overflow-hidden rounded-xl bg-white shadow-lg">

                    <div class="relative h-[170px]">

                        <img src="@/assets/media/card3.png" alt=""
                            class="h-full w-full object-cover" />

                        <span
                            class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-8 py-2 text-xs font-bold uppercase text-white">
                            Event Highlights
                        </span>

                    </div>

                    <div class="px-4 py-5">

                        <h3 class="text-lg font-semibold text-black">
                            Onboarding international talent at ANDRITZ
                        </h3>

                        <p class="mt-1 text-sm leading-4 text-[#777]">
                            How ANDRITZ Feed & Biofuel turns international hires into long-term team members.
                        </p>

                        <div class="mt-8 flex justify-between text-sm text-black">
                            <span>5 min read</span>

                            <span class="text-right">
                                DE
                                <br />
                                December 2
                            </span>
                        </div>

                    </div>

                </article>

                <!-- Card 4 -->
                <article class="overflow-hidden rounded-xl bg-white shadow-lg">

                    <div class="relative h-[170px]">

                        <img src="@/assets/media/card4.png" alt=""
                            class="h-full w-full object-cover" />

                        <span
                            class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-8 py-2 text-xs font-bold uppercase text-white">
                            Article
                        </span>

                    </div>

                    <div class="px-4 py-5">

                        <h3 class="text-lg font-semibold text-black">
                            Business DE-DK borderless cooperation.
                        </h3>

                        <p class="mt-1 text-sm leading-4 text-[#777]">
                            Hard to name, easy to feel — the cross-border region where Danish and German businesses find each other.
                        </p>

                        <div class="mt-8 flex justify-between text-sm text-black">
                            <span>6 min read</span>

                            <span class="text-right">
                                DK/DE
                                <br />
                                December 2
                            </span>
                        </div>

                    </div>

                </article>

                <!-- Card 5 -->
                <article class="overflow-hidden rounded-xl bg-white shadow-lg">

                    <div class="relative h-[170px]">

                        <img src="@/assets/media/card5.png" alt=""
                            class="h-full w-full object-cover" />

                        <span
                            class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-8 py-2 text-xs font-bold uppercase text-white">
                            Interview
                        </span>

                    </div>

                    <div class="px-4 py-5">

                        <h3 class="text-lg font-semibold text-black">
                            Meet Katja Rosenburg
                        </h3>

                        <p class="mt-1 text-sm leading-4 text-[#777]">
                            Project manager at Erhvervsfremme Nordfriesland and responsible for the project Interreg Business DE-DK.
                        </p>

                        <div class="mt-8 flex justify-between text-sm text-black">
                            <span>10:45 min</span>

                            <span class="text-right">
                                DE
                                <br />
                                October 8
                            </span>
                        </div>

                    </div>

                </article>

                <!-- Card 6 -->
                <article class="overflow-hidden rounded-xl bg-white shadow-lg">

                    <div class="relative h-[170px]">

                        <img src="@/assets/media/card6.png" alt=""
                            class="h-full w-full object-cover" />

                        <span
                            class="absolute right-3 top-3 rounded-md bg-[#3E5A78] px-8 py-2 text-xs font-bold uppercase text-white">
                            Article
                        </span>

                    </div>

                    <div class="px-4 py-5">

                        <h3 class="text-lg font-semibold text-black">
                            The two-step approach: attract and retain
                        </h3>

                        <p class="mt-1 text-sm leading-4 text-[#777]">
                            Gilte Cramp Davidson of Work-live-stay: international hires are not just a strategic advantage — they’re people.
                        </p>

                        <div class="mt-8 flex justify-between text-sm text-black">
                            <span>7 min read</span>

                            <span class="text-right">
                                DK/DE
                                <br />
                                June 6
                            </span>
                        </div>

                    </div>

                </article>

            </div>

            <!-- Next -->
            <div class="mt-24 flex justify-end pb-10">

                <button class="text-xl font-bold italic text-[#7C8BDA] transition hover:opacity-70">
                    Next →
                </button>

            </div>

        </div>

    </section>
</template>

<script setup>
</script>