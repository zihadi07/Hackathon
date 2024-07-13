import { useState } from "react";

const EvaluationForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-8 mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Interest Survey
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Have you participated in any Science/Maths Olympiad?
          </label>
          <div className="flex items-center mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="participation"
                value="Yes"
                checked={formData.participation === "Yes"}
                onChange={handleChange}
                required
                className="mr-2"
              />
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="radio"
                name="participation"
                value="No"
                checked={formData.participation === "No"}
                onChange={handleChange}
                required
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Have you received any scholarships?
          </label>
          <div className="flex items-center mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="scholarship"
                value="Yes"
                checked={formData.scholarship === "Yes"}
                onChange={handleChange}
                required
                className="mr-2"
              />
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="radio"
                name="scholarship"
                value="No"
                checked={formData.scholarship === "No"}
                onChange={handleChange}
                required
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Do you love going to School/College/University?
          </label>
          <div className="flex items-center mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="likeInstitute"
                value="Yes"
                checked={formData.likeInstitute === "Yes"}
                onChange={handleChange}
                required
                className="mr-2"
              />
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="radio"
                name="likeInstitute"
                value="No"
                checked={formData.likeInstitute === "No"}
                onChange={handleChange}
                required
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Have you done any projects before?
          </label>
          <div className="flex items-center mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="project"
                value="Yes"
                checked={formData.project === "Yes"}
                onChange={handleChange}
                required
                className="mr-2"
              />
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="radio"
                name="project"
                value="No"
                checked={formData.project === "No"}
                onChange={handleChange}
                required
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="favSub" className="block text-gray-700 mb-2">
            What is your favorite subject?
          </label>
          <select
            id="favSub"
            name="favSub"
            value={formData.favSub}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Any language">Do not have any</option>
            <option value="History/Geography">History/Geography</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="graspPow" className="block text-gray-700 mb-2">
            How much do you think is your grasping power? {"(1-6)"}
          </label>
          <select
            id="graspPow"
            name="graspPow"
            value={formData.graspPow}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a value
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="artCom" className="block text-gray-700 mb-2">
            Have you won any art competition?
          </label>
          <select
            id="artCom"
            name="artCom"
            value={formData.artCom}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select an opinion
            </option>
            <option value="Yes">Yes</option>
            <option value="Maybe">Maybe</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EvaluationForm;
