/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageURL: "https://www.hunter.cuny.edu/research/repository/images/hunter_campus1.jpg/image_preview",
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageURL: "https://qns.com/wp-content/uploads/2020/11/twitter_sm-07.png",
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageURL: "http://www.brooklyn.cuny.edu/web/com_homepage_2022/220503_Aerial_Quads_738x491.jpg",
	});

	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
    lastname: "Smith",
		email: "joesmith123@gmail.com",
		imageURL: "https://s3.ivisa.com/website-assets/blog/id-photo2.jpg"
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
    lastname: "Johnson",
		email: "maryJohnson123@gmail.com",
		imageURL: "https://media.istockphoto.com/id/522020013/photo/passport-photo-of-beautiful-woman-in-white-shirt.jpg?s=170667a&w=0&k=20&c=tHMnswO-D75hc6_YijBTn9a5ZN8ElmOYDUixqzczBuE="

	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;
