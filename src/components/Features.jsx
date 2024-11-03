import { features } from "../lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {features.map((feature, index) => (
        <Card key={index}>
          <CardHeader>
            <feature.icon className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <CardTitle className="text-center text-blue-600">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Features;
