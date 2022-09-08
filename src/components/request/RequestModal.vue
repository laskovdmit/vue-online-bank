<template>
    <form @submit.prevent="onSubmit">
        <div :class="['form-control', {invalid: fError}]">
            <label for="fio">ФИО</label>
            <input id="fio" type="text" v-model="fio" @blur="fBlur">
            <small v-if="fError">{{ fError }}</small>
        </div>
        <div :class="['form-control', {invalid: pError}]">
            <label for="phone">Телефон</label>
            <input id="phone" type="phone" v-model="phone" @blur="pBlur">
            <small v-if="pError">{{ pError }}</small>
        </div>
        <div :class="['form-control', {invalid: aError}]">
            <label for="sum">Сумма заявки</label>
            <input id="sum" type="number" v-model="amount" @blur="aBlur">
            <small v-if="aError">{{ aError }}</small>
        </div>
        <div :class="['form-control']">
            <label for="status">Статус заявки</label>
            <select id="status" v-model="status">
                <option value="done">Завершен</option>
                <option value="cancelled">Отменен</option>
                <option value="active">Активен</option>
                <option value="pending">Выполняется</option>
            </select>
        </div>
        <button class="btn primary" :disabled="isSubmitting">Создать</button>
    </form>
</template>

<script>
import { useStore } from 'vuex'
import { useRequestForm } from '../../use/requestForm';

export default {
    emits: ['created'],
    setup(_, { emit }) {
        const store = useStore();

        const submit = async values => {
            await store.dispatch('request/create', values);
            emit('created');
        };

        return {
            ...useRequestForm(submit)
        }
    }
}
</script>

<style>

</style>