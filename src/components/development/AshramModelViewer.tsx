
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// This component loads and renders the 3D model
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} dispose={null} />;
}

export default function AshramModelViewer() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelUrl, setModelUrl] = useState<string | null>(null);

  const handleLoadModel = () => {
    // This is a placeholder URL - replace with your actual model URL when available
    // For example: "/models/ashram-model.glb"
    setModelUrl("/placeholder.svg");
    setModelLoaded(true);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-orange-50">
        <h3 className="text-2xl font-semibold text-gray-800">3D Ashram Model</h3>
        <p className="text-gray-600">Explore our vision for the new ashram in 3D</p>
      </div>
      
      <div className="h-[400px] relative">
        {!modelLoaded ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gray-50">
            <p className="text-gray-600 mb-6 text-center">
              Experience our new ashram design in three dimensions. Click the button below to load the 3D model.
            </p>
            <Button onClick={handleLoadModel}>
              Load 3D Model
            </Button>
          </div>
        ) : (
          <Suspense fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
              <span className="ml-2 text-gray-600">Loading 3D model...</span>
            </div>
          }>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              
              {modelUrl && <Model url={modelUrl} />}
              
              <Environment preset="city" />
              <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={1.5} far={2} />
              <OrbitControls enableZoom={true} enablePan={true} />
            </Canvas>
          </Suspense>
        )}
      </div>
      
      <div className="p-4 bg-orange-50">
        <p className="text-sm text-gray-600">
          <strong>Instructions:</strong> Once loaded, click and drag to rotate the model. Use scroll to zoom in/out.
        </p>
      </div>
    </div>
  );
}
