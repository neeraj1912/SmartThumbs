"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Earn cryptocurrency by participating in two engaging tasks,
        <LinkPreview url="" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
          Data Labeling
        </LinkPreview>{" "}
        {" "}
        <LinkPreview url="" className="font-bold">
          
        </LinkPreview>{" "}
        , where you tag and annotate datasets to train AI models, and
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url=""
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Thumbnail Reviewing{" "}
        </LinkPreview>{"  "}
        , where you rate video thumbnails to help creators improve engagement.
      </p>
    </div>
  );
}
