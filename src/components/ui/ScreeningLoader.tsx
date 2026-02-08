import { Loader } from "lucide-react";
import { Card } from "@/components/ui/card";

const ScreeningLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <Card className="w-[420px] rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col items-center text-center gap-4">
          <Loader className="h-10 w-10 animate-spin text-primary" />

          <h2 className="text-xl font-semibold">
            Screening resumes…
          </h2>

          <p className="text-sm text-muted-foreground">
            We are downloading resumes, extracting content, and matching
            skills using AI.  
            This may take a few moments.
          </p>

          <div className="w-full space-y-2 text-left text-sm mt-4">
            <p>📄 Reading PDF resumes</p>
            <p>🧠 Analyzing skills with AI</p>
            <p>📊 Calculating match scores</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ScreeningLoader;
