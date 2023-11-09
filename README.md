# GrowlService
[![CSS3](https://img.shields.io/badge/css3-black?style=for-the-badge&logo=css3)](https://hub.docker.com/u/marzeckm)
[![JavaScript](https://img.shields.io/badge/javascript-black?style=for-the-badge&logo=javascript)](https://github.com/marzeckm)  
  
Minimal growl-service for showing notifications on websites. A Lightweight Notification Solution for Web Development

Welcome to GrowlService, a compact and efficient notification service designed for web developers seeking a lightweight solution for enhancing user interaction on their websites. The GrowlService is a JavaScript and CSS-based notification system that comes in a minimal package of just 4KB, ensuring it seamlessly integrates with your web projects without compromising performance.

## Key Features:

1. Ultra-Lightweight: With a mere 4KB footprint, GrowlService adds valuable notification functionality to your website without imposing a heavy load on its resources. This lightweight nature makes it an ideal choice for projects where performance is a top priority.

2. Versatile Compatibility: Built with compatibility in mind, GrowlService is designed to work seamlessly with a wide range of web development frameworks. Whether you're using React, Angular, Vue, or any other modern framework, integrating GrowlService is a breeze.

3. Browser Support: The GrowlService extends its support to all modern browsers, ensuring a consistent and reliable user experience. From the latest versions of Chrome, Firefox, Safari, and Edge to the ever-persistent Internet Explorer 11, GrowlService ensures that your notifications reach your audience across diverse browser environments.

## Getting Started:
To integrate GrowlService into your project, simply include the provided JavaScript and CSS files. The intuitive usage allows you to trigger notifications with ease, enhancing user engagement without the need for complex configurations.

Adding GrowlService to your web project is a straightforward process. Simply include the following lines in the <head> section of your HTML file to link the GrowlService stylesheet and script:

`<link rel="stylesheet" href="url/to/GrowlService.min.css">
<script src="url/to/GrowlService.min.js"></script>`

These two lines ensure that your project is equipped with the necessary styles and scripts to leverage the capabilities of GrowlService. Once integrated, you can start incorporating lightweight and visually appealing notifications effortlessly, enhancing the overall user experience on your website. Feel free to explore the flexible API and customization options to tailor the notification system to suit your project's unique requirements. With GrowlService, elevating your web application's interactivity has never been simpler. Make sure to include the code after the document body has been initialized and call the growlservice only after execution of the growlservice initialization.

## Usage Instructions:

Integrating GrowlService into your web project unlocks a seamless way to deliver notifications. Use the following syntax to display notifications of different types:

- Info Notification:  
`GrowlService().info("Title", "Text of the info notification");`

- Success Notification:  
`GrowlService().success("Title", "Text of the success notification");`

- Warning Notification:  
`GrowlService().warning("Title", "Text of the warning notification");`

- Error Notification:  
`GrowlService().error("Title", "Text of the error notification");`

Simply choose the appropriate method based on the nature of your notification, and GrowlService will handle the rest. Customize titles and notification text to suit your application's needs, providing users with clear and visually appealing feedback. Explore the full potential of GrowlService to enhance the interactivity of your web application effortlessly.

## Requirements
- Text-Editor for editing the code files
- Min. Internet Explorer 11, Firefox 70, Google Chrome 70, Safari 11, Chromium 70

## Contribute
If you want to contribute to the development of this project, feel free to submit pull requests or open issues. Let's make the GrowlService even better together!

## License
This project is licensed under the [MIT License](LICENSE).
