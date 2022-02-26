import "./style.css";

export default function Post(props) {
  return (
    <main class="relative container mx-auto px-4">
      <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
        <img
          class="absolute inset-0 object-cover object-top w-full h-full filter blur"
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt=""
        />
      </div>

      <div class="mt-[-10%] w-1/2 mx-auto">
        <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
          <img
            class="w-full h-full absolute inset-0 object-cover"
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt=""
          />
        </div>
      </div>

      <article class="max-w-prose mx-auto py-8">
        <h1 class="text-4xl font-bold">TÍTULO.</h1>
        <h2 class="mt-2 text-sm text-gray-500">
          Kevin Hernández, 28 November, 2021
        </h2>

        <p class="mt-6">
          Recently, I was in Developer Communities Whatsapp’s groups talking
          about new technologies, many of them were telling me about a new one
          created by the creator of Node.js… Wait… what was its name again?
          Deno? What Deno is? Deno is a modern and secure runtime for JavaScript
          and TypeScript that uses V8 Javascript Engine and it’s built in Rust,
          made by the Node.js creator, Ryan Dahl. Today we’ll build a simple
          Deno App and make a container with it. What will you need to succeed?
          Docker installed on your PC. Deno Installed on your PC. Git… maybe?
          (PD: Could be a MacOs Machine too) So…. Let’s start! .
        </p>
      </article>
    </main>
  );
}
