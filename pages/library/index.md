---
layout: home
prev: false
next: false
---

<div style="padding: .875rem;"></div>

# Библиотека

<script setup>
import { ref } from 'vue';
import { withBase } from 'vitepress';
import { VPButton } from 'vitepress/theme';
import subjectsListJSON from "../../data/subjects.json";
import booksListJSON from "../../data/library.json";

const subjectsList = ref(subjectsListJSON);

const termsList = [5, 4, 3, 2, 1];

const currentSubject = ref(-1);
const currentTerm = ref(5);

const booksList = ref(booksListJSON);

function switchTab(tab) {
    currentSubject.value = tab;
}
const switchTerm = (term) => { currentTerm.value = term };
</script>

<div class="categories-list">
    <VPButton
        v-for="term of termsList"
        :theme="currentTerm == term ? 'brand' : 'alt'"
        :text="term + (currentTerm == term ? ' семестр' : '')"
        @click="switchTerm(term)"
    />
    <div class="v-divider"></div>
    <VPButton
        v-for="subject of subjectsList.filter(el => booksList.filter(b => b.subjects.includes(el.id)).length != 0 || el.id == -1)"
        :text="subject.text"
        :theme="currentSubject == subject.id ? 'brand' : 'alt'"
        @click="switchTab(subject.id)"
    />
</div>

<div class="library-list">
    <div class="book-wrapper" v-for="book of booksList.filter(el => (currentSubject == -1 || el.subjects.includes(currentSubject)) && el.terms.includes(currentTerm))">
        <a :href="book.url" target="_blank">
            <div class="book-cover"><img :src="withBase('../public/media/library/') + book.cover" /></div>
            <div class="book-info">
                <p class="book-title">{{book.title}}</p>
                <p class="book-authors">{{ book.authors.join(", ") }}</p>
                <div style="margin-top: .25rem;">
                    <Badge type="info">{{subjectsList.find(el => book.subjects.includes(el.id)).text}}</Badge>
                </div>
            </div>
        </a>
    </div>
</div>
<div v-if="booksList.filter(el => (currentSubject == -1 || el.subjects.includes(currentSubject)) && el.terms.includes(currentTerm)).length == 0">
<p class="notfound">Ничего не найдено</p>
</div>

<style scoped>
.categories-list {
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    margin: 1.5rem 0;
}
.categories-list button {
    padding: 8px 12px !important;
    line-height: initial !important;
    font-size: .8rem !important;
    min-width: calc(2rem + 1px);
}
.library-list {
    display: flex;
    flex-direction: column;
    gap: .75rem;
    margin: 1rem 0;
}
.book-wrapper {
    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    width: 100%;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: border-color .25s, background-color .25s;
    padding: 16px;
    font-size: .9rem;
}
.book-wrapper > a {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
}
.book-wrapper:hover {
    border-color: var(--vp-c-brand-1);
}
.book-wrapper:hover > a {
    color: inherit;
}
.book-wrapper .book-cover img {
    min-width: 48px;
    border-radius: 6px;
}
.book-wrapper p {
    margin: 0;
    padding: 0;
    line-height: 1.4
}
.book-wrapper .book-info {
    display: flex;
    flex-direction: column;
    gap: .25rem;
}
.book-wrapper .book-title {
    font-weight: bold;
}
.book-wrapper .book-authors {
    font-size: .75rem;
    color: var(--vp-c-text-2);
}

.v-divider {
    border-left: 1px solid var(--vp-c-divider);
    margin: .325rem .5rem;
}
.notfound {
    text-align: center;
    color: var(--vp-c-text-2);
    font-size: .875rem;
}
</style>