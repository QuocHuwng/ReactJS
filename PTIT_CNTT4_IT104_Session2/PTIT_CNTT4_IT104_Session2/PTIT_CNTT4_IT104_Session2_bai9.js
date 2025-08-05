function getStudentSummary(student) {
    const { name, age, listMonhoc } = student;
    const total = listMonhoc.reduce((sum, mon) => sum + mon.score, 0);
    const avg = +(total / listMonhoc.length).toFixed(2);

    let level = "";
    if (avg >= 8.5) level = "Hoc sinh gioi";
    else if (avg >= 7) level = "Hoc sinh kha";
    else if (avg > + 5) level = "Hoc sinh trung binh";
    else level = "Hoc sinh yeu";
    const sorted = [...listMonhoc].sort((a, b) => b.score - a.score);
    const best = sorted[0];
    const worst = sorted[sorted.length - 1];
    return `${name} is ${age} year old.
    Average score: ${avg} -> Hoc sinh kha
    Best subject: ${best.subject} (${best.score})
    Weakest subject: ${worst.subject} (${worst.score})
    `.trim();
}
const student = {
    name: "Dev",
    age: 20,
    listMonhoc: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "Physics", score: 6 },
        { subject: "Literature", score: 8.5 },
    ]
};
console.log(getStudentSummary(student));