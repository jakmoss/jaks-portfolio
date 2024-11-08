<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="John Doe's Web Developer Portfolio">
    <title>My Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <!-- Header -->
        <header class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-800 mb-2">John Doe</h1>
            <p class="text-xl text-gray-600">Web Developer</p>
        </header>

        <!-- Photo -->
        <div class="mb-12 flex justify-center">
            <img src="/placeholder.svg?height=200width=200" alt="John Doe" class="rounded-full w-48 h-48 object-cover shadow-lg" />
        </div>

        <!-- About Me -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
            <p class="text-gray-600">
                I'm a passionate web developer with 5 years of experience in creating responsive and user-friendly websites. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
        </section>

        <!-- Skills -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
            <ul class="list-disc list-inside text-gray-600">
                <li>HTML5 &amp; CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>Git &amp; GitHub</li>
            </ul>
        </section>

        <!-- Projects -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
                    <p class="text-gray-600 mb-4">A brief description of Project 1 and its key features.</p>
                    <a href="#" class="text-blue-500 hover:underline">View Project</a>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Project 2</h3>
                    <p class="text-gray-600 mb-4">A brief description of Project 2 and its key features.</p>
                    <a href="#" class="text-blue-500 hover:underline">View Project</a>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
            <p class="text-gray-600 mb-2">Email: john.doe@example.com</p>
            <p class="text-gray-600 mb-2">LinkedIn: <a href="#" class="text-blue-500 hover:underline">linkedin.com/in/johndoe</a></p>
            <p class="text-gray-600">GitHub: <a href="#" class="text-blue-500 hover:underline">github.com/johndoe</a></p>
        </section>
    </div>
</body>
</html>
