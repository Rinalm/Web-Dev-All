export const Practice = () => {
    const students = []// empty arr . 
    return(
        <>
            {/* { x && y } , so && checks 1st LHS value(T/F): if F(0) so it not checks RHS, then RHS value(T/F) */}
            {/* <p> {students.length && 'no students found'} </p> */}

            {/* 1) print RHS, by strict check lhs */}
            {/* <p> {students.length===0 && 'no students found'} </p> */}
            {/* 2) */}
            {/* <p> {!students.length && 'no students found'} </p> */}
            {/* 3) */}
            <p> {Boolean(!students.length) && 'no students found'} </p>

            {/*  */}
            <p>Number of students:{students.length} </p>
        </>
        
    ) 
}