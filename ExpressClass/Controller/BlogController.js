import Blogs from "../Models/Blogs.js"

const getBlogs = async (req, res) => {
    const getID = req.query.id;
    if(getID){
        const viewBlogs = await Blogs.findById(getID);
        res.send(viewBlogs);
    }else{
        const blogs = await Blogs.find();
        res.send(blogs);
    }

};

const addBlogs = async (req, res) => {
    const blog = req.body;
    const addedBlog = await Blogs.create(blog);
    res.status(200).send({message: `Blog: ${addedBlog} created.`})

};

const updateBlogs = async (req, res) => {
    const updateID = req.params.id;
    const blog = req.body;
    const updated = await Blogs.findByIdAndUpdate(updateID, blog, {new: true});
    res.send({message: `Blog: ${updated} updated successfully.`});

}

const deleteBlogs = async(req, res ) => {
    const deletID = req.params.id;
    const deleted = await Blogs.findByIdAndDelete(deletID);
    res.send({message: `Deleted successfully. Blog ID: ${deletID}`})
}

export {getBlogs, addBlogs, updateBlogs, deleteBlogs}