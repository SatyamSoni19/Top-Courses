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
        <div className="w-full sm:w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden mobile-card">
            <div className="relative">
                <img src={course.image.url} alt="img" className="w-full h-auto object-cover"></img>

                <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-white rounded-full absolute right-2 
                    grid place-items-center">
                    <button onClick={clickHandler} className="flex items-center justify-center">
                        {
                            likedCourses.includes(course.id) ? 
                            (<FcLike fontSize="1.25rem" className="sm:text-[1.75rem]" />) : 
                            (<FcLikePlaceholder fontSize="1.25rem" className="sm:text-[1.75rem]" />)
                        }
                    </button>
                </div>
            </div>
            <div className="p-3 sm:p-4">
                <p className="text-white font-semibold text-base sm:text-lg leading-6 mobile-text">{course.title}</p>
                <p className="mt-2 text-white text-sm sm:text-base">
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