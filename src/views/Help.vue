<template>
  <app-page back title="Помощь">
    <question-item
      v-for="q in questions"
      :key="q.title"
      :question="q"
    ></question-item>
  </app-page>
</template>

<script>
import QuestionItem from '../components/question/QuestionItem.vue';
import AppPage from '../components/ui/AppPage.vue';

export default {
  setup() {
    const questions = [
      {title: 'Заголовок 1', text: 'Ответ 1'},
      {title: 'Заголовок 2', text: 'Ответ 2'},
    ];

    return {
      questions
    }
  },
  components: {AppPage, QuestionItem}
}
</script>AppPage