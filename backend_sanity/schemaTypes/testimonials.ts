export default {
    name: "testimonial",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "image",
            title: "ImgURL",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "feedback",
            title: "Feedback",
            type: "string"
        },
    ]
}