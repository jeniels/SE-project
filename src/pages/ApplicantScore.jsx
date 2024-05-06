/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tFV6DSw7HcB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card } from "@/components/ui/card";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

export default function ApplicantScore() {
  return (
    <div className="grid gap-6 sm:grid-cols-profile">
      <Card className="p-0">
        <CardContent className="p-0">
          <div className="space-y-2 p-4">
            <h2 className="text-2xl font-bold">Personal Information</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="flex items-center space-x-2">
                <div className="font-semibold">Name</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  John Doe
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  johndoe@example.com
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="font-semibold">Location</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  New York, NY
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="p-0">
        <CardContent className="p-0">
          <div className="space-y-2 p-4">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="font-semibold">Communication</div>
                <div className="ml-auto w-1/3">
                  <div />
                </div>
                <div className="font-semibold">80%</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-semibold">Teamwork</div>
                <div className="ml-auto w-1/3">
                  <div />
                </div>
                <div className="font-semibold">90%</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-semibold">Leadership</div>
                <div className="ml-auto w-1/3">
                  <div />
                </div>
                <div className="font-semibold">70%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="p-0">
        <CardContent className="p-0">
          <div className="space-y-2 p-4">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="font-semibold">Software Engineering</div>
                <div className="ml-auto w-1/3">
                  <div />
                </div>
                <div className="font-semibold">95%</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-semibold">Product Management</div>
                <div className="ml-auto w-1/3">
                  <div />
                </div>
                <div className="font-semibold">60%</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-semibold">Marketing</div>
                <div className="ml-auto w-1/3">
                  <div />
                </div>
                <div className="font-semibold">40%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="p-0">
        <CardContent className="p-0">
          <div className="space-y-2 p-4">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="font-semibold">Computer Science</div>
                <div className="ml-auto w-1/3">
                  <div />
                </div>
                <div className="font-semibold">100%</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-semibold">Business Administration</div>
                <div className="ml-auto w-1/3">
                  <div />
                </div>
                <div className="font-semibold">80%</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-semibold">Economics</div>
                <div className="ml-auto w-1/3">
                  <div />
                </div>
                <div className="font-semibold">60%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col items-center justify-center p-6">
        <div className="grid max-w-[400px] gap-3">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold">Matching Percentage</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your skills and experience match
              <strong>82%</strong>
              of other candidates{"\n                      "}
            </p>
          </div>
          <div className="mx-auto w-[200px] aspect-[1/1]">
            <PieChart className="w-full aspect-[1/1]" />
          </div>
        </div>
      </Card>
      <Card className="flex flex-col items-center justify-center p-6">
        <div className="grid max-w-[400px] gap-3">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold">Similarity</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your skills and experience are most similar to candidates in the
              following industries
            </p>
          </div>
          <div className="mx-auto w-full aspect-[1/1]">
            <BarChart className="w-full aspect-[1/1]" />
          </div>
        </div>
      </Card>
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
