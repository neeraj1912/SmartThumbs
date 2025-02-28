"use client"
import React, { useState, useEffect } from 'react';
import { Upload, Link, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription}  from '@/components/ui/card';
import Checkbox  from '@/components/ui/checkbox';
import { Input }  from '@/components/ui/input';
import { Button }  from '@/components/ui/button';
import { RadioGroup, RadioGroupItem }  from '@/components/ui/radio-group';
import SidebarLinks from "@/components/sidebarLinks"; // Import the new SidebarLinks component
import Header from "@/components/header";

const TaskSubmissionPage = () => {
  const [timeLeft, setTimeLeft] = useState(72 * 60 * 60);
  const [submissionType, setSubmissionType] = useState('link');
  const [file, setFile] = useState(null);
  const [datasetLink, setDatasetLink] = useState('');
  const [isOriginal, setIsOriginal] = useState(false);

  // This would normally come from your backend
  const taskData = {
    title: "Image Classification Challenge",
    description: "Your task is to develop a machine learning model that can accurately classify images into 10 different categories. The model should achieve a minimum accuracy of 85% on the test set. Please ensure your submission includes all necessary code, documentation, and model weights.",
    finalDatasetLink: "https://example.com/final-dataset"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmissionTypeChange = (value) => {
    setSubmissionType(value);
    setFile(null);
    setDatasetLink('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', {
      submissionType,
      data: submissionType === 'link' ? datasetLink : file,
      isOriginal
    });
  };

  return (
    <div className="flex h-screen">
        <SidebarLinks />

        <div className="flex-1 pt-6 px-5 pb-4 overflow-y-auto ml-[300px] bg-zinc-950 text-white">
            <Header title={"Task Submission"} />
    <div className="bg-zinc-950 flex items-center justify-center">
      <Card className="max-w bg-zinc-900 text-white border-zinc-800">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">
              {taskData.title}
            </CardTitle>
            <div className="flex items-center gap-2 text-xl">
              <Clock className="w-6 h-6" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <CardDescription className="text-zinc-300 leading-relaxed">
            {taskData.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Final Dataset Link Section */}
          <div className="p-4 bg-zinc-800 rounded-lg border border-zinc-700">
            <h3 className="text-sm font-medium text-zinc-300 mb-2">Final Dataset</h3>
            <a 
              href={taskData.finalDatasetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm break-all">{taskData.finalDatasetLink}</span>
            </a>
          </div>
          

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Submission Type Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Choose Submission Method
              </label>
              <RadioGroup
  value={submissionType}
  onValueChange={(value) => {
    console.log("Selected value:", value); // Debug log
    setSubmissionType(value);
    setFile(null);
    setDatasetLink('');
  }}
  className="flex gap-4"
>
  <RadioGroupItem value="link" id="link-option" />
  <RadioGroupItem value="file" id="file-option" />
</RadioGroup>

            </div>

            {/* Conditional Rendering based on submission type */}
            {submissionType === 'link' ? (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-300">Dataset Link</label>
                <div className="flex items-center gap-2">
                  <Link className="w-5 h-5 text-zinc-400" />
                  <Input
                    type="url"
                    placeholder="https://dataset-link.com"
                    className="flex-1 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    value={datasetLink}
                    onChange={(e) => setDatasetLink(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-300">Upload Labeled Dataset</label>
                <div className="border-2 border-dashed border-zinc-700 rounded-lg p-6 text-center">
                  <Input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="w-8 h-8 text-zinc-400" />
                    <span className="text-sm text-zinc-400">
                      {file ? file.name : 'Click to upload or drag and drop'}
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Originality Confirmation */}
            <div className="flex items-start space-x-2">
            <Checkbox id="originality" />

              <label htmlFor="originality" className="text-sm text-zinc-300">
                I confirm that this submission is my original work and I have followed all competition guidelines
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={!isOriginal || (submissionType === 'link' ? !datasetLink : !file)}
            >
              Submit Task
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
    </div>
  );
};

export default TaskSubmissionPage;