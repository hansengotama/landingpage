<template>
    <div id="highlights-panel">
        <div class="container bg-smoke-grey">
            <div class="title-container">
                <div class="title">
                    How Can I Help You?
                </div>
                <div class="description">
                    Our work then targeted, best practices outcomes social innovation synergy.
                    Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                    program areas scale.
                </div>
            </div>
            <div class="highlight-container">
                <div class="box-container" v-for="(highlightContent, index) in highlightContents" :key="index">
                    <div class="content">
                        <div class="header">
                            <div class="title">{{ highlightContent.title }}</div>
                            <div class="icon">
                                <i :class="highlightContent.icon" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="description">{{ highlightContent.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                highlightContents: [
                    {
                        title: "Consult",
                        description: "Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.",
                        icon: "fa fa-comments-o"
                    },
                    {
                        title: "Design",
                        description: "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.",
                        icon: "fa fa-paint-brush"
                    },
                    {
                        title: "Develop",
                        description: "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.",
                        icon: "fa fa-cubes"
                    },
                    {
                        title: "Marketing",
                        description: "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.",
                        icon: "fa fa-bullhorn"
                    },
                    {
                        title: "Manage",
                        description: "Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.",
                        icon: "fa fa-tasks"
                    },
                    {
                        title: "Evolve",
                        description: "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.",
                        icon: "fa fa-line-chart"
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" src="./index.styl" scoped></style>