"use client"
import React, { useState } from 'react';
import { Upload, Link, Clock, Bitcoin, FileText } from 'lucide-react';

const TaskCreationPage = () => {
  const [uploadMethod, setUploadMethod] = useState('file');
  const [formData, setFormData] = useState({
    taskHeading: '',
    taskDescription: '',
    datasetFile: null,
    datasetLink: '',
    timeLimit: '',
    totalAmount: '',
    datasetSize: '',
    termsAccepted: false
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    // Validate file type (zip only)
    if (file && file.name.toLowerCase().endsWith('.zip')) {
      setFormData(prev => ({
        ...prev,
        datasetFile: file,
        datasetLink: '' // Clear link if file is selected
      }));
      setErrors(prev => ({ ...prev, dataset: '' }));
    } else {
      setFormData(prev => ({ ...prev, datasetFile: null }));
      setErrors(prev => ({ ...prev, dataset: 'Please upload a valid ZIP file.' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.taskHeading.trim()) newErrors.taskHeading = 'Task heading is required';
    if (!formData.taskDescription.trim()) newErrors.taskDescription = 'Task description is required';
    
    // Dataset validation
    if (uploadMethod === 'file' && !formData.datasetFile) {
      newErrors.dataset = 'Please upload a ZIP file';
    } else if (uploadMethod === 'link' && !formData.datasetLink.trim()) {
      newErrors.dataset = 'Please provide a dataset link';
    }

    if (!formData.timeLimit) newErrors.timeLimit = 'Time limit is required';
    if (!formData.totalAmount) newErrors.totalAmount = 'Total amount is required';
    if (!formData.datasetSize) newErrors.datasetSize = 'Dataset size is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';

    // Set errors or proceed with submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Implement actual task submission logic
    console.log('Task Submitted:', formData);
    
    // Reset form after successful submission
    setFormData({
      taskHeading: '',
      taskDescription: '',
      datasetFile: null,
      datasetLink: '',
      timeLimit: '',
      totalAmount: '',
      datasetSize: '',
      termsAccepted: false
    });
    setUploadMethod('file');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative">
      {/* Logo in the top-left corner */}
      <div className="absolute top-4 left-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-auto" // Adjust height and width as needed
        />
      </div>
  <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
      <div className="bg-zinc-950 shadow-md rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Create New Task</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Task Heading */}
          <div>
            <label htmlFor="taskHeading" className="block text-sm font-medium text-gray-300 mb-2">
              Task Heading
            </label>
            <input
              type="text"
              id="taskHeading"
              name="taskHeading"
              value={formData.taskHeading}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-zinc-800 border-zinc-700 text-white ${
                errors.taskHeading ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
              }`}
              placeholder="Enter task heading"
            />
            {errors.taskHeading && (
              <p className="text-red-500 text-sm mt-1">{errors.taskHeading}</p>
            )}
          </div>

          {/* Task Description */}
          <div>
            <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-300 mb-2">
              Task Description
            </label>
            <textarea
              id="taskDescription"
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleInputChange}
              rows="4"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-zinc-800 border-zinc-700 text-white ${
                errors.taskDescription ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
              }`}
              placeholder="Describe the task in detail"
            ></textarea>
            {errors.taskDescription && (
              <p className="text-red-500 text-sm mt-1">{errors.taskDescription}</p>
            )}
          </div>

          {/* Upload Method Toggle */}
          <label htmlFor="sampledatasetFile" className="block text-sm font-medium text-gray-300 mb-2">
              Sample Dataset File
            </label>
          <div className="flex justify-center mb-4">
            <div className="bg-zinc-800 rounded-full p-1 flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setUploadMethod('file')}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  uploadMethod === 'file' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:bg-zinc-700'
                }`}
              >
                <Upload className="mr-2 inline-block" size={20} />
                File Upload
              </button>
              <button
                type="button"
                onClick={() => setUploadMethod('link')}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  uploadMethod === 'link' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:bg-zinc-700'
                }`}
              >
                <Link className="mr-2 inline-block" size={20} />
                Link Upload
              </button>
            </div>
          </div>

          {/* Dataset Upload */}
          <div>
            {uploadMethod === 'file' ? (
              <div>
                
                <label 
                  htmlFor="sampledatasetFile" 
                  className={`block w-full p-4 border-2 border-dashed rounded-lg text-center cursor-pointer transition ${
                    errors.dataset 
                      ? 'border-red-500 text-red-500' 
                      : 'border-zinc-700 hover:border-blue-500 text-gray-400'
                  }`}
                >
                  <input 
                    type="file" 
                    id="sampledatasetFile"
                    name="sampledatasetFile"
                    accept=".zip"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {formData.datasetFile 
                    ? `Selected: ${formData.datasetFile.name}` 
                    : 'Click to select a ZIP file'}
                </label>
              </div>
            ) : (
              <input 
                type="url" 
                name="datasetLink"
                placeholder="Enter dataset link" 
                value={formData.datasetLink}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-zinc-800 border-zinc-700 text-white ${
                  errors.dataset ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
              />
            )}
            {errors.dataset && (
              <p className="text-red-500 text-sm mt-1">{errors.dataset}</p>
            )}
          </div>

          {/* Upload Method Toggle */}
          <label htmlFor="datasetFile" className="block text-sm font-medium text-gray-300 mb-2">
              Dataset File
            </label>
          <div className="flex justify-center mb-4">
            <div className="bg-zinc-800 rounded-full p-1 flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setUploadMethod('file')}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  uploadMethod === 'file' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:bg-zinc-700'
                }`}
              >
                <Upload className="mr-2 inline-block" size={20} />
                File Upload
              </button>
              <button
                type="button"
                onClick={() => setUploadMethod('link')}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  uploadMethod === 'link' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:bg-zinc-700'
                }`}
              >
                <Link className="mr-2 inline-block" size={20} />
                Link Upload
              </button>
            </div>
          </div>

          {/* Dataset Upload */}
          <div>
            {uploadMethod === 'file' ? (
              <div>
                
                <label 
                  htmlFor="datasetFile" 
                  className={`block w-full p-4 border-2 border-dashed rounded-lg text-center cursor-pointer transition ${
                    errors.dataset 
                      ? 'border-red-500 text-red-500' 
                      : 'border-zinc-700 hover:border-blue-500 text-gray-400'
                  }`}
                >
                  <input 
                    type="file" 
                    id="datasetFile"
                    name="datasetFile"
                    accept=".zip"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {formData.datasetFile 
                    ? `Selected: ${formData.datasetFile.name}` 
                    : 'Click to select a ZIP file'}
                </label>
              </div>
            ) : (
              <input 
                type="url" 
                name="datasetLink"
                placeholder="Enter dataset link" 
                value={formData.datasetLink}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-zinc-800 border-zinc-700 text-white ${
                  errors.dataset ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
              />
            )}
            {errors.dataset && (
              <p className="text-red-500 text-sm mt-1">{errors.dataset}</p>
            )}
          </div>

          {/* Additional Task Details */}
          <div className="grid grid-cols-2 gap-4">
            {/* Time Limit */}
            <div>
              <label htmlFor="timeLimit" className="block text-sm font-medium text-gray-300 mb-2">
                <Clock className="inline-block mr-2 text-gray-400" size={16} />
                Time Limit (days)
              </label>
              <input
                type="number"
                id="timeLimit"
                name="timeLimit"
                value={formData.timeLimit}
                onChange={handleInputChange}
                min="1"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-zinc-800 border-zinc-700 text-white ${
                  errors.timeLimit ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
                placeholder="Number of days"
              />
              {errors.timeLimit && (
                <p className="text-red-500 text-sm mt-1">{errors.timeLimit}</p>
              )}
            </div>

            {/* Total Amount */}
            <div>
              <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-300 mb-2">
                <Bitcoin className="inline-block mr-2 text-yellow-500" size={16} />
                Total Amount (BTC)
              </label>
              <input
                type="number"
                id="totalAmount"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleInputChange}
                min="0"
                step="0.00000001"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-zinc-800 border-zinc-700 text-white ${
                  errors.totalAmount ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
                placeholder="Total task budget"
              />
              {errors.totalAmount && (
                <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>
              )}
            </div>
          </div>

          {/* Dataset Size */}
          <div>
            <label htmlFor="datasetSize" className="block text-sm font-medium text-gray-300 mb-2">
              Dataset Size (MB)
            </label>
            <input
              type="number"
              id="datasetSize"
              name="datasetSize"
              value={formData.datasetSize}
              onChange={handleInputChange}
              min="0"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-zinc-800 border-zinc-700 text-white ${
                errors.datasetSize ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
              }`}
              placeholder="Estimated dataset size in megabytes"
            />
            {errors.datasetSize && (
              <p className="text-red-500 text-sm mt-1">{errors.datasetSize}</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="termsAccepted" className="text-sm text-gray-300">
              I accept the <a href="#" className="text-blue-400 hover:underline">terms and conditions</a>
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            <FileText className="mr-2" size={20} />
            Submit Task
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default TaskCreationPage;