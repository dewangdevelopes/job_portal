import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Briefcase,
  Calendar,
  Video,
  Building2,
  Filter,
  Copy,
  Check as CheckIcon,
  Search,
  ChevronRight,
  Plus,
  Check,
  GraduationCap,
  Clock,
  X,
  User,
  BookOpen,
  Trash2,
} from "lucide-react";

// ─── Dummy Data ──────────────────────────────────────────────────────────────

const overviewStats = [
  {
    label: "Applications",
    value: "1,240",
    change: "+5.2%",
    positive: true,
    color: "#3b82f6",
    sparkline: [30, 45, 35, 60, 40, 70, 55, 80, 65, 90],
  },
  {
    label: "Shortlisted",
    value: "142",
    change: "+12%",
    positive: true,
    color: "#8b5cf6",
    sparkline: [20, 30, 25, 40, 35, 50, 45, 55, 60, 70],
  },
  {
    label: "Interviews",
    value: "24",
    change: "-10%",
    positive: false,
    color: "#f97316",
    sparkline: [50, 40, 45, 30, 40, 25, 35, 20, 30, 20],
  },
  {
    label: "Selections",
    value: "6",
    change: "+4%",
    positive: true,
    color: "#10b981",
    sparkline: [10, 15, 12, 20, 18, 25, 22, 28, 30, 35],
  },
];

const recentActivity = [
  {
    name: "Kurian George Cheripurathu",
    role: "Assistant Professor",
    status: "Under Review",
    statusColor: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    name: "Mariyan J Rooban",
    role: "Assistant Professor",
    status: "Interview Scheduled",
    statusColor: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    name: "Niranjan SR",
    role: "Lab Instructor",
    status: "Selected",
    statusColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    name: "Sneha P",
    role: "Assistant Professor",
    status: "Under Review",
    statusColor: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

const upcomingInterviews = [
  {
    day: "23",
    month: "FEB",
    name: "Mariyan J Rooban",
    time: "10:00 AM",
    round: "Technical Round",
  },
  {
    day: "31",
    month: "FEB",
    name: "Niranjan SR",
    time: "02:00 PM",
    round: "Final Round",
  },
  {
    day: "25",
    month: "FEB",
    name: "Rahul K",
    time: "11:00 AM",
    round: "Technical Round",
  },
];

const jobOpenings = [
  {
    id: 1,
    title: "Assistant Professor",
    school: "School of Engineering",
    discipline: "Computer Science",
    type: "teaching",
    qualification: "PhD",
    experience: "3 Years",
    deadline: "2026-03-10",
  },
  {
    id: 2,
    title: "Lab Instructor",
    school: "School of Engineering",
    discipline: "Mechanical Engineering",
    type: "non-teaching",
    qualification: "M.Tech",
    experience: "2 Years",
    deadline: "2026-03-05",
  },
  {
    id: 3,
    title: "Associate Professor",
    school: "School of Business",
    discipline: "Management",
    type: "teaching",
    qualification: "PhD",
    experience: "5 Years",
    deadline: "2026-03-15",
  },
];

const applications = [
  {
    id: "APP-001",
    name: "New Applicant",
    role: "Assistant Professor",
    qualification: "PhD",
    experience: "5 Yrs Exp",
    status: "Submitted",
    statusColor: "text-slate-600 bg-slate-50 border-slate-200",
    appliedOn: "2026-02-23",
    action: "Schedule Interview",
    actionType: "schedule",
  },
  {
    id: "APP-002",
    name: "Sneha P",
    role: "Assistant Professor",
    qualification: "PhD",
    experience: "1 Yr Exp",
    status: "Under Review",
    statusColor: "text-amber-600 bg-amber-50 border-amber-100",
    appliedOn: "2026-02-22",
    action: "Schedule Interview",
    actionType: "schedule",
  },
  {
    id: "APP-003",
    name: "Kurian George Cheripurathu",
    role: "Assistant Professor",
    qualification: "M.Tech",
    experience: "2 Yrs Exp",
    status: "Under Review",
    statusColor: "text-amber-600 bg-amber-50 border-amber-100",
    appliedOn: "2026-02-21",
    action: "Schedule Interview",
    actionType: "schedule",
  },
  {
    id: "APP-004",
    name: "Rahul K",
    role: "Assistant Professor",
    qualification: "M.Tech",
    experience: "3 Yrs Exp",
    status: "Interview Scheduled",
    statusColor: "text-blue-600 bg-blue-50 border-blue-100",
    appliedOn: "2026-02-20",
    action: "Move to Round 2",
    actionType: "move",
  },
  {
    id: "APP-005",
    name: "Mariyan J Rooban",
    role: "Assistant Professor",
    qualification: "PhD",
    experience: "4 Yrs Exp",
    status: "Interview Scheduled",
    statusColor: "text-blue-600 bg-blue-50 border-blue-100",
    appliedOn: "2026-02-18",
    action: null,
    actionType: null,
  },
  {
    id: "APP-006",
    name: "Niranjan SR",
    role: "Lab Instructor",
    qualification: "B.Tech",
    experience: "5 Yrs Exp",
    status: "Selected",
    statusColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    appliedOn: "2026-02-13",
    action: null,
    actionType: null,
  },
];

const schools = [
  {
    id: 1,
    name: "School of Engineering",
    disciplines: [
      { name: "Computer Science", hod: "Dr. Arjun GK" },
      { name: "Mechanical Engineering", hod: "Dr. Melbin Joseph" },
    ],
  },
  {
    id: 2,
    name: "School of Business",
    disciplines: [{ name: "Management", hod: "Dr. Arjun GK (Interim)" }],
  },
  {
    id: 3,
    name: "School of Arts",
    disciplines: [],
  },
];

// ─── Sparkline SVG Helper ─────────────────────────────────────────────────────
const Sparkline = ({ data, color, positive }) => {
  const w = 100;
  const h = 36;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 6) - 3;
    return `${x},${y}`;
  });
  const path = `M ${pts.join(" L ")}`;
  const fill = `M ${pts[0]} L ${pts.join(" L ")} L ${w},${h} L 0,${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-9"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={`grad-${color.replace("#", "")}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#grad-${color.replace("#", "")})`} />
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ─── Schedule Interview Modal ─────────────────────────────────────────────────
const ScheduleModal = ({ candidate, onClose }) => {
  const [rounds, setRounds] = useState("2");
  const [roundName, setRoundName] = useState("Technical Round");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [meetLink, setMeetLink] = useState("");
  const [meetId, setMeetId] = useState("");
  const [password, setPassword] = useState("");
  const [panelists, setPanelists] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[90vw] sm:max-w-md p-5 sm:p-6 relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>
        <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-900 mb-0.5 pr-6">
          Schedule Interview for {candidate.name.split(" ")[0]}
        </h3>
        <p className="text-[11px] sm:text-[12px] text-slate-500 mb-4 sm:mb-5">
          Configure rounds and panelists for the candidate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-[9px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Number of Rounds
            </label>
            <input
              type="number"
              value={rounds}
              onChange={(e) => setRounds(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400"
            />
          </div>
          <div>
            <label className="block text-[9px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              First Round Name
            </label>
            <input
              type="text"
              value={roundName}
              onChange={(e) => setRoundName(e.target.value)}
              placeholder="Technical Round"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-[9px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400"
            />
          </div>
          <div>
            <label className="block text-[9px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400"
            />
          </div>
        </div>

        {[
          {
            label: "Meeting Link",
            val: meetLink,
            set: setMeetLink,
            ph: "https://meet.google.com/...",
          },
          {
            label: "Meeting ID",
            val: meetId,
            set: setMeetId,
            ph: "123-456-789",
          },
          {
            label: "Password",
            val: password,
            set: setPassword,
            ph: "Optional",
          },
        ].map(({ label, val, set, ph }) => (
          <div key={label} className="mb-3">
            <label className="block text-[9px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              {label}
            </label>
            <input
              type="text"
              value={val}
              onChange={(e) => set(e.target.value)}
              placeholder={ph}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
            />
          </div>
        ))}

        <div className="mb-5">
          <label className="block text-[9px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Panelist Emails (Comma separated)
          </label>
          <input
            type="text"
            value={panelists}
            onChange={(e) => setPanelists(e.target.value)}
            placeholder="prof.arjun@univ.edu"
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
          />
        </div>

        <div className="flex gap-2 justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[12px] sm:text-[13px] font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-[12px] sm:text-[13px] font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer active:scale-95"
          >
            Schedule Interview
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Tab: Overview ────────────────────────────────────────────────────────────
const OverviewTab = ({ setActiveTab }) => (
  <div className="space-y-6">
    {/* Stats Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {overviewStats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
        >
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
            {stat.label}
          </p>
          <p className="text-[24px] sm:text-[28px] font-black text-slate-900 leading-none mb-1">
            {stat.value}
          </p>
          <div className="flex items-center gap-1 mb-3">
            {stat.positive ? (
              <TrendingUp size={12} className="text-emerald-500" />
            ) : (
              <TrendingDown size={12} className="text-red-400" />
            )}
            <span
              className={`text-[10px] sm:text-[11px] font-bold ${
                stat.positive ? "text-emerald-500" : "text-red-400"
              }`}
            >
              {stat.change}
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium">
              vs last quarter
            </span>
          </div>
          <Sparkline
            data={stat.sparkline}
            color={stat.color}
            positive={stat.positive}
          />
        </div>
      ))}
    </div>

    {/* Bottom Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Recent Activity */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-800">
            Recent Activity
          </h3>
          <button
            onClick={() => setActiveTab("Applications")}
            className="text-[11px] sm:text-[12px] font-semibold text-slate-500 hover:text-slate-900 hover:underline transition-all cursor-pointer"
          >
            View All
          </button>
        </div>
        <div className="space-y-1">
          {recentActivity.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-3 py-2.5 px-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors duration-200 cursor-pointer border-b border-transparent last:border-0 hover:border-transparent"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[12px] font-bold text-slate-600 shrink-0">
                  {item.name[0]}
                </div>
                <div>
                  <p className="text-[12px] sm:text-[13px] font-semibold text-slate-800 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">
                    Applied for {item.role}
                  </p>
                </div>
              </div>
              <span
                className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${item.statusColor}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Interviews */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm">
        <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-800 mb-4">
          Upcoming Interviews
        </h3>
        <div className="space-y-2">
          {upcomingInterviews.map((iv, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors duration-200 border-b border-transparent last:border-0"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-black shadow-md shadow-slate-900/10 flex flex-col items-center justify-center shrink-0">
                <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase leading-none">
                  {iv.month}
                </span>
                <span className="text-[14px] sm:text-[15px] font-black text-slate-900 leading-tight mt-0.5">
                  {iv.day}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] sm:text-[13px] font-semibold text-slate-800 leading-tight truncate">
                  {iv.name}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5 truncate">
                  <Clock size={11} className="shrink-0" />
                  <span className="shrink-0">{iv.time}</span>
                  <span className="text-slate-300 shrink-0">•</span>
                  <span className="truncate">{iv.round}</span>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-white text-black text-[10px] sm:text-[11px] font-bold rounded-lg hover:bg-gray-100 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm shadow-slate-900/10">
                <Video size={12} />
                <span className="hidden sm:inline">Join</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Tab: Jobs ────────────────────────────────────────────────────────────────
const JobsTab = () => {
  const [openings, setOpenings] = useState(jobOpenings);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterType, setFilterType] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    school: "",
    discipline: "",
    type: "Teaching",
    qualification: "",
    experience: "",
    deadline: "",
  });

  const handlePublish = () => {
    if (!form.title || !form.school) return;
    const newJob = {
      id: openings.length + 1,
      title: form.title,
      school: form.school,
      discipline: form.discipline,
      type: form.type.toLowerCase().replace(" ", "-"),
      qualification: form.qualification,
      experience: form.experience,
      deadline: form.deadline,
    };
    setOpenings([...openings, newJob]);
    setForm({
      title: "",
      school: "",
      discipline: "",
      type: "Teaching",
      qualification: "",
      experience: "",
      deadline: "",
    });
  };

  const handleCopy = (job) => {
    navigator.clipboard.writeText(
      `Job Opening: ${job.title} at ${job.school} - ${job.discipline}. Deadline: ${job.deadline}`,
    );
    setCopiedId(job.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const displayedOpenings = openings.filter(
    (job) =>
      filterType === "All" ||
      job.type.toLowerCase() === filterType.toLowerCase(),
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 sm:gap-6 items-start">
      {/* Left: Active Openings */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-800">
              Active Openings
            </h3>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold">
              {displayedOpenings.length}
            </span>
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={`flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold px-2 py-1 rounded transition-colors cursor-pointer ${
                filterOpen || filterType !== "All"
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Filter size={13} />
              {filterType === "All" ? "Filter" : filterType}
            </button>
            {filterOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-36 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden z-20 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                {["All", "Teaching", "Non-Teaching"].map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setFilterType(type);
                      setFilterOpen(false);
                    }}
                    className={`px-3 py-2 text-left text-[11px] sm:text-[12px] font-medium transition-colors ${
                      filterType === type
                        ? "text-slate-900 bg-slate-50 font-bold border-l-2 border-slate-900"
                        : "text-slate-500 hover:bg-slate-50 border-l-2 border-transparent"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="space-y-3">
          {displayedOpenings.length === 0 ? (
            <p className="text-[12px] text-slate-400 text-center py-6">
              No openings match the selected filter.
            </p>
          ) : (
            displayedOpenings.map((job) => (
              <div
                key={job.id}
                className="border border-slate-100 rounded-xl p-3 sm:p-5 hover:border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group bg-white flex flex-col gap-3 sm:gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-[14px] sm:text-[15px] font-bold text-slate-800 mb-1">
                      {job.title}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-slate-500 flex-wrap">
                      <Building2 size={12} className="shrink-0" />
                      <span className="truncate max-w-[120px] sm:max-w-none">
                        {job.school}
                      </span>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <span className="truncate">{job.discipline}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#F3F4F6] text-[#4B5563]">
                      {job.type}
                    </span>
                    <button
                      className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                      title="Delete opening"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-50 w-full flex items-center">
                  <p className="text-[11px] sm:text-[12px] text-slate-500">
                    <span className="font-semibold text-slate-700">
                      Deadline:
                    </span>{" "}
                    {job.deadline}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right: Create New Opening form */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm lg:sticky lg:top-4">
        <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-800 mb-4">
          Create New Opening
        </h3>
        <div className="space-y-2.5">
          <input
            type="text"
            placeholder="Job Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            <input
              type="text"
              placeholder="School"
              value={form.school}
              onChange={(e) => setForm({ ...form, school: e.target.value })}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
            />
            <input
              type="text"
              placeholder="Discipline"
              value={form.discipline}
              onChange={(e) => setForm({ ...form, discipline: e.target.value })}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
            />
          </div>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-600 cursor-pointer"
          >
            <option>Teaching</option>
            <option>Non-Teaching</option>
          </select>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            <input
              type="text"
              placeholder="Required Qualification"
              value={form.qualification}
              onChange={(e) =>
                setForm({ ...form, qualification: e.target.value })
              }
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
            />
            <input
              type="text"
              placeholder="Experience (e.g. 3 Years)"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
            />
          </div>
          <input
            type="date"
            value={form.deadline}
            onChange={(e) => setForm({ ...form, deadline: e.target.value })}
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-500"
          />
          <button
            onClick={handlePublish}
            className="w-full py-2.5 mt-1 bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/10 text-white text-[12px] sm:text-[13px] font-bold rounded-lg transition-all duration-300 cursor-pointer active:scale-[0.98]"
          >
            Publish Opening
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Tab: Applications ────────────────────────────────────────────────────────
const statusFilters = [
  "Round 1",
  "Applications",
  "Shortlisted",
  "Selected",
  "Rejected",
];

const ApplicationsTab = () => {
  const [activeFilter, setActiveFilter] = useState("Applications");
  const [search, setSearch] = useState("");
  const [scheduleFor, setScheduleFor] = useState(null);

  const displayed = applications.filter((a) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      a.name.toLowerCase().includes(q) ||
      a.role.toLowerCase().includes(q);
    const matchFilter =
      activeFilter === "Applications" ||
      (activeFilter === "Selected" && a.status === "Selected") ||
      (activeFilter === "Shortlisted" && a.status === "Under Review") ||
      (activeFilter === "Round 1" && a.status === "Interview Scheduled") ||
      (activeFilter === "Rejected" && a.status === "Rejected");
    return matchSearch && matchFilter;
  });

  return (
    <>
      {scheduleFor && (
        <ScheduleModal
          candidate={scheduleFor}
          onClose={() => setScheduleFor(null)}
        />
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        {/* Search */}
        <div className="relative w-full sm:w-[250px] lg:w-[300px]">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search by name, email, or role…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-[12px] bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300 shadow-sm"
          />
        </div>

        {/* Filter Badges - Scroll horizontally on very small screens */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 sm:pb-0 w-full sm:w-auto ml-auto">
          <div className="flex items-center gap-1 bg-[#E5E7EB80] rounded-xl p-1 shadow-sm w-max">
            {statusFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 text-[11px] sm:text-[12px] font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === f
                    ? "bg-white text-slate-900"
                    : "text-slate-500 hover:text-slate-800 hover:bg-[#e3e7ed80]"
                }`}
              >
                {f}
              </button>
            ))}
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] sm:text-[12px] font-semibold text-slate-500 rounded-lg hover:text-slate-800 hover:bg-[#e3e7ed80] transition-all cursor-pointer whitespace-nowrap">
              <Calendar size={13} />
              Date
            </button>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="space-y-2">
        {displayed.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center bg-white rounded-2xl border border-slate-100 shadow-sm">
            <Search size={24} className="text-slate-300 mb-3" />
            <p className="text-[13px] sm:text-[14px] font-bold text-slate-600">
              No results found
            </p>
            <p className="text-[11px] sm:text-[12px] text-slate-400 mt-1">
              Try a different filter or search term.
            </p>
          </div>
        ) : (
          displayed.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-slate-100 rounded-xl px-3 py-3 md:px-4 md:py-3.5 flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 hover:border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Avatar */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[12px] sm:text-[13px] font-bold text-slate-600 shrink-0">
                  {app.name[0]}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <p className="text-[13px] sm:text-[14px] font-bold text-slate-800 truncate max-w-[140px] sm:max-w-none">
                      {app.name}
                    </p>
                    <span
                      className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md border ${app.statusColor}`}
                    >
                      {app.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-400">
                      <Building2 size={11} className="shrink-0" />
                      <span className="truncate max-w-[100px] sm:max-w-none">
                        {app.role}
                      </span>
                    </span>
                    <span className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-400">
                      <GraduationCap size={11} className="shrink-0" />
                      {app.qualification}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400">
                      {app.experience}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto sm:ml-auto border-t sm:border-0 border-slate-50 pt-2 sm:pt-0 mt-1 sm:mt-0">
                {/* Applied on */}
                <div className="text-left sm:text-right shrink-0">
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium tracking-wide">
                    APPLIED ON
                  </p>
                  <p className="text-[11px] sm:text-[12px] font-semibold text-slate-700">
                    {app.appliedOn}
                  </p>
                </div>

                {/* Action */}
                <div className="flex items-center gap-2">
                  {app.action && (
                    <button
                      onClick={() =>
                        app.actionType === "schedule" && setScheduleFor(app)
                      }
                      className="shrink-0 px-3 py-1.5 text-[10px] sm:text-[11px] font-normal bg-white text-black rounded-lg hover:bg-gray-100 active:scale-95 transition-all cursor-pointer shadow-sm"
                    >
                      {app.action}
                    </button>
                  )}

                  <ChevronRight
                    size={16}
                    className="text-slate-300 shrink-0 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all cursor-pointer hidden sm:block"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

// ─── Tab: Structure ───────────────────────────────────────────────────────────
const StructureTab = () => {
  const [schoolsList, setSchoolsList] = useState(schools);
  const [newSchool, setNewSchool] = useState("");
  const [discForm, setDiscForm] = useState({
    schoolId: "",
    name: "",
    hod: "",
  });

  const addSchool = () => {
    if (!newSchool.trim()) return;
    setSchoolsList([
      ...schoolsList,
      { id: schoolsList.length + 1, name: newSchool.trim(), disciplines: [] },
    ]);
    setNewSchool("");
  };

  const addDiscipline = () => {
    if (!discForm.schoolId || !discForm.name) return;
    setSchoolsList(
      schoolsList.map((s) =>
        s.id === parseInt(discForm.schoolId)
          ? {
              ...s,
              disciplines: [
                ...s.disciplines,
                { name: discForm.name, hod: discForm.hod },
              ],
            }
          : s,
      ),
    );
    setDiscForm({ schoolId: "", name: "", hod: "" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-4 sm:gap-6 items-start">
      {/* Left: Schools list */}
      <div className="space-y-3">
        {schoolsList.map((school) => (
          <div
            key={school.id}
            className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Building2 size={15} className="text-blue-500" />
                </div>
                <p className="text-[13px] sm:text-[14px] font-bold text-slate-800">
                  {school.name}
                </p>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100 w-fit">
                {school.disciplines.length} Discipline
                {school.disciplines.length !== 1 ? "s" : ""}
              </span>
            </div>

            {school.disciplines.length === 0 ? (
              <p className="text-[11px] sm:text-[12px] text-slate-300 italic text-center py-4 bg-slate-50 rounded-xl border border-slate-100 border-dashed">
                No disciplines added yet.
              </p>
            ) : (
              <div className="space-y-2">
                {school.disciplines.map((disc, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors gap-1 sm:gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap
                        size={13}
                        className="text-slate-400 shrink-0"
                      />
                      <span className="text-[12px] sm:text-[13px] font-semibold text-slate-700 truncate">
                        {disc.name}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 flex items-center gap-1.5 sm:justify-end shrink-0">
                      <User size={11} className="shrink-0" />
                      <span className="truncate max-w-[150px]">{disc.hod}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right: Add Forms */}
      <div className="space-y-4 lg:sticky lg:top-4">
        {/* Add School */}
        <div className="bg-white border border-slate-100 rounded-xl p-4 sm:p-5 shadow-sm">
          <h3 className="text-[12px] sm:text-[13px] font-bold text-slate-800 mb-3 flex items-center gap-1.5">
            <Plus size={15} className="text-[#155DFC]" />
            Add School
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="School Name"
              value={newSchool}
              onChange={(e) => setNewSchool(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addSchool()}
              className="flex-1 w-full border border-slate-200 rounded-xl px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
            />
            <button
              onClick={addSchool}
              className="w-10 flex border shrink-0 items-center justify-center rounded-xl border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <Check size={16} />
            </button>
          </div>
        </div>

        {/* Add Discipline */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm">
          <h3 className="text-[12px] sm:text-[13px] font-bold text-slate-800 mb-3 flex items-center gap-1.5">
            <Plus size={15} className="text-[#9810FA]" />
            Add Discipline
          </h3>
          <div className="space-y-2.5">
            <select
              value={discForm.schoolId}
              onChange={(e) =>
                setDiscForm({ ...discForm, schoolId: e.target.value })
              }
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-500 cursor-pointer"
            >
              <option value="">Select School</option>
              {schoolsList.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Discipline Name"
              value={discForm.name}
              onChange={(e) =>
                setDiscForm({ ...discForm, name: e.target.value })
              }
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
            />
            <input
              type="text"
              placeholder="HOD Name/ID"
              value={discForm.hod}
              onChange={(e) =>
                setDiscForm({ ...discForm, hod: e.target.value })
              }
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-[12px] sm:text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 placeholder:text-slate-300"
            />
            <button
              onClick={addDiscipline}
              className="w-full py-2.5 mt-1 bg-slate-900 hover:bg-slate-800 hover:shadow-md text-white text-[12px] sm:text-[13px] font-bold rounded-xl transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              Add Discipline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const TABS = ["Overview", "Jobs", "Applications", "Structure"];

const HRDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex min-h-[100dvh] bg-[#f4f5f7]">
      <SideMenu />

      <div className="max-md:ml-0 md:ml-[75px] max-md:pt-[56px] flex-1 flex flex-col w-[100vw] md:w-full overflow-x-hidden min-h-screen">
        <div className="w-full max-w-[1060px] mx-auto px-4 md:px-8 py-6 md:py-8 flex flex-col flex-1">
          {/* Page Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
            <div>
              <p className="text-sm md:text-xl font-black text-slate-900 tracking-tight">
                HR Overview
              </p>
              <p className="text-[12px] md:text-[13px] text-slate-500 font-medium mt-0.5">
                Manage recruitment, applications, and interviews.
              </p>
            </div>

            {/* Tab Switcher - Horizontal scroll on mobile */}
            <div className="w-full overflow-x-auto no-scrollbar lg:w-auto -mx-4 px-4 lg:mx-0 lg:px-0">
              <div className="flex items-center gap-1 bg-[#E5E7EB80] rounded-xl p-1 shadow-sm w-max lg:w-auto">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3.5 py-1.5 text-[11px] sm:text-[12px] font-semibold rounded-lg transition-all duration-200 cursor-pointer  ${
                      activeTab === tab
                        ? "bg-white text-slate-900"
                        : "text-slate-500 hover:text-slate-800  hover:bg-[#e3e7ed80]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1">
            {activeTab === "Overview" && (
              <OverviewTab setActiveTab={setActiveTab} />
            )}
            {activeTab === "Jobs" && <JobsTab />}
            {activeTab === "Applications" && <ApplicationsTab />}
            {activeTab === "Structure" && <StructureTab />}
          </div>

          <Footer className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
