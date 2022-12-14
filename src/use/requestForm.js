import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'

export function useRequestForm (fn) {
    const { handleSubmit, isSubmitting } = useForm({
        initialValues: {
            status: 'active'
        }
    });

    const { value: fio, errorMessage: fError, handleBlur: fBlur } = useField(
        'fio', 
        yup.string()
            .trim()
            .required('Введите ФИО клиента')
    );
    const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
        'phone', 
        yup.string()
            .trim()
            .required('Телефон не может быть пустым')
    );
    const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
        'amount', 
        yup.number()
            .required('Пожалуйста, введите сумму заявки')
            .min(0, 'Сумма не может быть меньше 0')
    );
    const { value: status } = useField('status');

    const onSubmit = handleSubmit(fn);

    return {
        fio,
        phone,
        amount,
        status,
        fError,
        pError,
        aError,
        fBlur,
        pBlur,
        aBlur,
        onSubmit,
        isSubmitting
    }
}