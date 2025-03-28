
import React from "react";
import AshramModelViewer from "./AshramModelViewer";
import ModelUploadDialog from "./ModelUploadDialog";

const ModelViewerSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Architectural Design</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our architectural vision for the new ashram through an interactive 3D model.
          </p>
          <div className="flex justify-center mb-8">
            <ModelUploadDialog 
              onModelUploaded={(modelUrl) => {
                console.log("Model uploaded:", modelUrl);
                // In a real implementation, you would update the model URL in the viewer
              }} 
            />
          </div>
        </div>
        
        <AshramModelViewer />
      </div>
    </section>
  );
};

export default ModelViewerSection;
