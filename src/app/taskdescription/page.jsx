"use client";
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import SidebarLinks from "@/components/sidebarLinks";
import Header from "@/components/header";
import { Button } from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import { Download, ExternalLink } from 'lucide-react';

const TaskPage = () => {
  const task = {
    title: "Image Classification Challenge",
    description: "Your task is to develop a machine learning model that can accurately classify images into 10 different categories. The model should achieve a minimum accuracy of 85% on the test set. Please ensure your submission includes all necessary code, documentation, and model weights.",
    sampleFile: "sample-ratings.csv",
    driveLink: "https://drive.google.com/file/d/1hT5lohxqCTOA42dxN-4cP6AEQSPGdXmh/view?usp=sharing",
    timeLimit: "72 hours",
    reward: "0.0015 BTC",
  };

  return (
    <div className="flex h-screen">
        <SidebarLinks />

        <div className="flex-1 pt-6 px-5 pb-4 overflow-y-auto ml-[300px] bg-zinc-950 text-white">
            <Header title={"Task Description"} />

            <Card className="max-w  bg-zinc-900 text-white border-zinc-800">
                <CardHeader>
                    <h1 className="text-2xl font-bold text-white">{task.title}</h1>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-2">Task Description</h2>
                        <p className="text-gray-300">{task.description}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-white mb-2">Sample Labels</h2>
                        <div className="flex gap-4">
                            <Button variant="outline" className="flex items-center gap-2 text-white border-white hover:bg-zinc-400 text-black">
                                <Download size={16} />
                                Download Sample File
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2 text-white border-white hover:bg-zinc-400 text-black">
                                <ExternalLink size={16} />
                                Sample File Link
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-gray-800 p-4 rounded-lg">
                        <div>
                            <h3 className="font-medium text-white">Time Limit</h3>
                            <p className="text-gray-300">{task.timeLimit}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-white">Reward</h3>
                            <p className="text-gray-300">{task.reward}</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-2">
                        <Checkbox id="terms" />
                        <label htmlFor="terms" className="text-sm text-gray-400">
                            I agree to the terms and conditions, including data handling policies
                            and quality requirements for submissions
                        </label>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button className="w-full text-white bg-blue-600 hover:bg-blue-700">Start Task</Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
};

export default TaskPage;
