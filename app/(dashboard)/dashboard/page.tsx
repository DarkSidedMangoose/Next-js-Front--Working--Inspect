"use client";
const Page = () => {
  const exampleFunction = (num: number) => {
    let cache: number | undefined;
    console.log("sorry");
    return () => {
      if (cache === undefined) {
        console.log("სხვა");
        cache = num;
      } else if (cache === num) {
        console.log("დაემთხვა");
        console.log(cache);
      }
    };
  };
  // Example usage of the memoized function
  const cachedFunction = exampleFunction(5);
  return (
    <div>
      <button onClick={() => cachedFunction()}>sad</button>
    </div>
  );
};

export default Page;
