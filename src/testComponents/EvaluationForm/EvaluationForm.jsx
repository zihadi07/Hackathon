import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const TaskCompletion = (props) => {
  const formik = useFormik({
    initialValues: {
      yesNoQuestion: '',
      multipleChoiceQuestion: '',
      textAnswer: '',
      tickMark: false,
    },
    validationSchema: Yup.object({
      yesNoQuestion: Yup.string().required('Required'),
      multipleChoiceQuestion: Yup.string().required('Required'),
      textAnswer: Yup.string().required('Required'),
      tickMark: Yup.boolean().oneOf([true], 'You must accept the terms'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
          <label className="block text-sm font-medium text-gray-700">{props.question}</label>
          <div className="mt-2 flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="yesNoQuestion"
                value="yes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="yesNoQuestion"
                value="no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {formik.touched.yesNoQuestion && formik.errors.yesNoQuestion ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.yesNoQuestion}</div>
          ) : null}
        </div>
  );
}
const EvaluationForm = () => {
  const formik = useFormik({
    initialValues: {
      yesNoQuestion: '',
      multipleChoiceQuestion: '',
      textAnswer: '',
      tickMark: false,
    },
    validationSchema: Yup.object({
      yesNoQuestion: Yup.string().required('Required'),
      multipleChoiceQuestion: Yup.string().required('Required'),
      textAnswer: Yup.string().required('Required'),
      tickMark: Yup.boolean().oneOf([true], 'You must accept the terms'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Self Evaluation Form</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Yes/No Question */}
        <TaskCompletion question="Did you complete the task101?" />
        <TaskCompletion question="Did you complete the task102?" />
        <TaskCompletion question="Did you complete the task103?" />
        <TaskCompletion question="Did you complete the task104?" />

        {/* Multiple Choice Question */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Choose the correct option</label>
          <select
            name="multipleChoiceQuestion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.multipleChoiceQuestion}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" label="Select an option" />
            <option value="option1" label="Option 1" />
            <option value="option2" label="Option 2" />
            <option value="option3" label="Option 3" />
          </select>
          {formik.touched.multipleChoiceQuestion && formik.errors.multipleChoiceQuestion ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.multipleChoiceQuestion}</div>
          ) : null}
        </div>

        {/* Text Answer */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Provide your answer</label>
          <input
            type="text"
            name="textAnswer"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.textAnswer}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.textAnswer && formik.errors.textAnswer ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.textAnswer}</div>
          ) : null}
        </div>

        {/* Tick Mark */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tick the box if you agree</label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tickMark"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.tickMark}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">I agree</span>
            </label>
          </div>
          {formik.touched.tickMark && formik.errors.tickMark ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.tickMark}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EvaluationForm;
