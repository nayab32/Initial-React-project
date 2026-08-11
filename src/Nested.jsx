function Nested(){
    const classes = [{
        name:"Class A",
        students: ["iqra","sara"]
    },
{
    name:"Class B",
    students:["Ali","umar"]
}
];
return(
    <>
    {classes.map((classItem)=>(
        <div>
            <h2>{classItem.name}</h2>
            {classItem.students.map((student)=>(<p>{student}

            </p>))}
        </div>
    ))}
    </>
)
}
export default Nested;