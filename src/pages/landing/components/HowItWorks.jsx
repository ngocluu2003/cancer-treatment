import { howItWorks } from "@/lib/data";
// i will modify -> task
const HowItWorks = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {howItWorks.map((step, index) => (
        <div className="text-center" key={index}>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <span className="text-xl font-bold text-green-600">{index + 1}</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold">{step.step}</h3>
          <p className="dark:text-400 text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
