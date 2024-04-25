export default async function HomePage() {
  // const session = await auth();

  // if (!session?.user) {
  //   redirect("/api/auth/signin?callbackUrl=/me")
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-stone-300 text-stone-800">
      <div className="container max-w-screen-md flex flex-col items-start justify-start gap-6 px-8 py-16 ">
        <h1 className="text-xl font-medium tracking-tight">
          Hello, Alex
        </h1>
        <div className="flex flex-col justify-start gap-4 w-full">
          {/* <Card className="w-full bg-stone-200 min-h-32">
            <CardHeader className="text-stone-700">
              <CardTitle>Lead Magnet Confidence</CardTitle>
              <CardDescription>
                Get leads to inquire about the strength of their lead magnets.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full bg-stone-200 min-h-32">
            <CardHeader className="text-stone-700">
              <CardTitle>Business Coaching Assessment</CardTitle>
              <CardDescription>
                See how far along your potential clients are in their business journey.
              </CardDescription>
            </CardHeader>
          </Card> */}
        </div>
      </div>
    </main>
  );
}
