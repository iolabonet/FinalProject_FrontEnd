<!-- TO DO: Que se vean todas las tasks como si fueran post-it y al hacer hover encima se haga zoom. -->

<template>
    <div.columns>
        <div.column>
            <div>
                <input v-model="searchTerm" placeholder="Filter by Title">
                <ul>
                    <li>v-for="tasks in filteredTasks"</li>
                    <!-- <div {{task.title}} by {{task.category}} doing: {{task.updoing}}></div> -->
                </ul>
            </div>
        </div.column>
    </div.columns>
</template>

<script setup>
</script>

<style></style>