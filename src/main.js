const submissionComponent = {
    template: 
    /*html*/
        `
        <div class="flex">
            <div class="mr-2">

                <img class="w-16 h-16 rounded" v-bind:src="submission.submissionImage" alt="">

            </div>

            <div>
                <div class="flex items-center">
                    <a v-bind:href="submission.url" class="mr-1 inline font-bold text-blue-600 text-base">
                        {{ submission.title }}</a>
                    <span
                        class="bg-gray-300 px-1 text-xs text-gray-500 font-bold rounded">#{{ submission.id }}</span>
                </div>


                <p class="mb-1 text-gray-600">{{ submission.description }}</p>

                <div class="flex items-center">

                    <h6 class="mr-1 text-xs text-gray-600 ">Submitted by :</h6>

                    <img class="h-6 w-6 rounded-full" v-bind:src="submission.avatar" alt="">

                </div>

            </div>

            <div class="absolute m-0 p-0 right-4">

                <div class="flex items-center justify-center">

                    <button v-on:click="upvote(submission.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline " fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>

                    <span class="font-bold m-0 p-0 text-blue-600">
                        {{ submission.votes }}
                    </span>

                </div>

            </div>
        </div>
        `,
        props: ["submission", "submissions"],
        methods: {
            upvote(submissionId) {
                const submission = this.submissions.find(
                    (submission) =>  submission.id === submissionId
                );
                submission.votes++;
            },
        }
}

const upvoteApp = {
    data() {
        return {
            submissions: Seed.submissions
        }
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a,b) => {
                return b.votes - a.votes;
            });
        }
    },
    methods: {

    },
    components: {
        "submission-component": submissionComponent,
    }
};

Vue.createApp(upvoteApp).mount('#app');