import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setlikedCourses = props.setlikedCourses;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            //phle se liked hua pada h
            setlikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("like removed");
        }
        else {
            //phle se like nhi hai
            // insert krna hai ye course ko liked course me
            if (likedCourses.length === 0) {
                setlikedCourses([course.id]);
            }
            else {
                //non-empty phle se
                setlikedCourses((prev) => [...prev, course.id]);
            } toast.success("Liked Successfully");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt="img"></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 
                    grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75 rem" />) : (<FcLikePlaceholder fontSize="1.75 rem" />)
                        }
                    </button>
                </div>
            </div>
            <div className="p-4 ">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100)) + "..." :
                            (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card