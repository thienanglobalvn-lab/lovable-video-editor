import { createFileRoute } from "@tanstack/react-router";
import {
  AudioLines,
  Captions,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  CloudUpload,
  Film,
  FolderOpen,
  Gauge,
  Home,
  Image as ImageIcon,
  Layers3,
  ListMusic,
  LogIn,
  Menu,
  Mic2,
  MoreHorizontal,
  Music2,
  Play,
  Scissors,
  SlidersHorizontal,
  Sparkles,
  Star,
  Subtitles,
  Upload,
  WandSparkles,
  X,
} from "lucide-react";
import { type ChangeEvent, type DragEvent, useRef, useState } from "react";

import sampleCoach from "@/assets/sample-coach.jpg";
import sampleGym from "@/assets/sample-gym.jpg";
import sampleStudio from "@/assets/sample-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clips — Biến video dài thành Shorts" },
      {
        name: "description",
        content:
          "Không gian tạo video ngắn bằng AI, thêm phụ đề, âm thanh và quản lý dự án trong một nơi.",
      },
      { property: "og:title", content: "Clips — Biến video dài thành Shorts" },
      {
        property: "og:description",
        content: "Tạo, biên tập và quản lý video ngắn nhanh chóng với các công cụ AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClipsDashboard,
});

const tools = [
  { icon: ImageIcon, line1: "Slide Đồ Họa", line2: "AI" },
  { icon: Music2, line1: "Đồng Bộ Nhịp", line2: "Nhạc" },
  { icon: SlidersHorizontal, line1: "Lọc Miền Điểm", line2: "Nhấn" },
  { icon: Sparkles, line1: "AI Chấm Điểm", line2: "Cảnh Quay" },
  { icon: Scissors, line1: "Video Dài →", line2: "Short" },
  { icon: Mic2, line1: "Nhập Từ", line2: "YouTube/Drive" },
  { icon: WandSparkles, line1: "Hook Mở Đầu", line2: "" },
  { icon: Captions, line1: "Caption Động", line2: "Bay" },
  { icon: Gauge, line1: "Cắt Khoảng", line2: "Lặng Tự Động" },
  { icon: Layers3, line1: "Slide Đồ Họa", line2: "AI" },
  { icon: AudioLines, line1: "Đồng Bộ Nhịp", line2: "Nhạc" },
  { icon: ListMusic, line1: "Lọc Miền Điểm", line2: "Nhấn" },
];

const samples = [
  { image: sampleGym, title: "Video mẫu 1", position: "50% 50%" },
  { image: sampleStudio, title: "Video mẫu 2", position: "50% 50%" },
  { image: sampleCoach, title: "Video mẫu 3", position: "50% 18%" },
  { image: sampleGym, title: "Video mẫu 4", position: "50% 58%" },
  { image: sampleCoach, title: "Video mẫu 5", position: "50% 28%" },
  { image: sampleStudio, title: "Video mẫu 6", position: "50% 45%" },
];

const projects = [
  { name: "Bí quyết chỉnh xong — biến đổi", meta: "Bản nháp · 2 phút", image: sampleCoach },
  { name: "4 clips + nhạc nền", meta: "Bản nháp · 2:15", image: sampleStudio },
  { name: "video-nhiều-clip-nhạc", meta: "20:45 · 09-30", image: sampleGym },
  { name: "2026-09-30_ai_sub-gent-video", meta: "20:36 · 09-30", image: sampleCoach },
  { name: "video-nhiều-clip-nhạc", meta: "20:28 · 09-30", image: sampleStudio },
];

function ClipsDashboard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [sourceTab, setSourceTab] = useState("Video dài → Short");
  const [projectTab, setProjectTab] = useState("Tất cả các dự án");
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [notice, setNotice] = useState("");
  const [selected, setSelected] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const acceptFile = (file?: File) => {
    if (!file) return;
    setFileName(file.name);
    setNotice(`Đã chọn ${file.name}`);
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    acceptFile(event.target.files?.[0]);
  };

  const onDrop = (event: DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    acceptFile(event.dataTransfer.files?.[0]);
  };

  const toggleProject = (index: number) => {
    setSelected((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-brand/30 bg-header/95 shadow-header backdrop-blur">
        <div className="flex h-14 items-center justify-between px-4 md:px-7">
          <div className="flex min-w-0 items-center gap-4">
            <div className="font-display text-3xl font-bold italic leading-none text-brand drop-shadow-brand">
              Clips
            </div>
            <div className="hidden h-5 w-px bg-border md:block" />
            <p className="truncate text-xs font-semibold md:text-sm">Video dài → Nhiều Short</p>
          </div>

          <div className="absolute left-1/2 hidden -translate-x-1/2 flex-col items-center lg:flex">
            <span className="text-[10px] font-semibold text-muted-foreground">Thời Gian · Thu Nhập · Tự Do</span>
            <div className="mt-1 flex h-1.5 w-64 overflow-hidden rounded-full bg-surface">
              <span className="w-3/5 bg-success" />
              <span className="w-1/4 bg-brand" />
              <span className="flex-1 bg-danger" />
            </div>
          </div>

          <div className="relative flex items-center gap-2">
            <button className="nav-button hidden sm:inline-flex" onClick={() => setNotice("Bảng giá đang được chuẩn bị")}> 
              <CircleDollarSign size={14} /> Giá cả
            </button>
            <button className="nav-button hidden sm:inline-flex" onClick={() => setNotice("Đã mở danh sách dự án")}> 
              <FolderOpen size={14} /> Dự án
            </button>
            <button className="nav-button hidden md:inline-flex" onClick={() => setNotice("Đã mở thư viện âm thanh")}> 
              <AudioLines size={14} /> Âm thanh
            </button>
            <button className="nav-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>
              <LogIn size={14} className="hidden sm:block" /> Đăng nhập <ChevronDown size={12} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-11 w-48 rounded-md border border-border bg-popover p-2 shadow-panel">
                <button className="w-full rounded-sm px-3 py-2 text-left text-xs hover:bg-accent" onClick={() => setNotice("Chức năng đăng nhập sẽ được kết nối sau")}>Đăng nhập tài khoản</button>
                <button className="w-full rounded-sm px-3 py-2 text-left text-xs hover:bg-accent" onClick={() => setNotice("Chức năng đăng ký sẽ được kết nối sau")}>Tạo tài khoản mới</button>
              </div>
            )}
            <button className="nav-icon sm:hidden" aria-label="Mở menu" onClick={() => setMenuOpen((open) => !open)}><Menu size={17} /></button>
          </div>
        </div>
      </header>

      <div className="fixed left-3 top-[4.5rem] z-20 hidden lg:block">
        <button className="home-button"><Home size={14} /> Trang chủ</button>
      </div>

      <section className="mx-auto w-full max-w-[1030px] px-4 pb-16 pt-10 md:px-7 md:pt-12">
        <div className="relative mx-auto max-w-[510px] text-center">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-6 select-none font-display text-[92px] font-bold leading-none text-watermark sm:text-[112px]">Create</div>
          <div className="relative z-10">
            <h1 className="text-sm font-medium md:text-base">Biến video thô thành content viral — tự động, bằng AI.</h1>
            <p className="mt-3 text-xs text-muted-foreground">Kéo thả video dài — AI quét và đề xuất đoạn hay nhất.</p>

            <div className="mt-5 rounded-md border border-border bg-panel/90 p-2 shadow-panel">
              <div className="flex items-center gap-2 rounded bg-input px-3 py-2">
                <input
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-xs text-foreground outline-none placeholder:text-subtle"
                  placeholder="Dán link YouTube, Google Drive, hoặc link file video"
                  aria-label="Link video"
                />
                <button
                  className="primary-button"
                  onClick={() => setNotice(url.trim() ? "Đã nhận liên kết video" : "Hãy dán liên kết video trước")}
                >
                  Lấy video
                </button>
              </div>

              <div className="my-2 flex items-center gap-3 text-[9px] uppercase text-subtle">
                <span className="h-px flex-1 bg-border" /> hoặc <span className="h-px flex-1 bg-border" />
              </div>

              <input ref={inputRef} className="hidden" type="file" accept="video/*" onChange={onFileChange} />
              <button
                className="upload-zone group"
                onClick={() => inputRef.current?.click()}
                onDragOver={(event) => event.preventDefault()}
                onDrop={onDrop}
              >
                <span className="grid h-8 w-8 place-items-center rounded bg-brand-soft text-brand"><CloudUpload size={17} /></span>
                <span className="text-left">
                  <strong className="block text-xs font-semibold">{fileName || "Kéo thả file video dài vào đây"}</strong>
                  <span className="block pt-0.5 text-[10px] text-muted-foreground">hoặc bấm để chọn file từ máy</span>
                </span>
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground">
              <span>Chế độ mặc:</span>
              {["Talking-head", "Nhiều clips + Nhạc", "Video dài → Short"].map((tab) => (
                <button key={tab} onClick={() => setSourceTab(tab)} className={sourceTab === tab ? "source-tab-active" : "source-tab"}>{tab}</button>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-11" aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="section-label">Được hỗ trợ bởi AI</h2>
          <div className="mt-5 grid grid-cols-4 gap-y-5 sm:grid-cols-6 lg:grid-cols-12">
            {tools.map(({ icon: Icon, line1, line2 }, index) => (
              <button key={`${line1}-${index}`} className="tool-button" onClick={() => setNotice(`Đã chọn ${line1} ${line2}`)}>
                <span className="tool-icon"><Icon size={19} strokeWidth={1.7} /></span>
                <span className="text-[9px] font-medium leading-3.5">{line1}<br />{line2 || <>&nbsp;</>}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="samples-heading">
          <h2 id="samples-heading" className="section-label">Video mẫu</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {samples.map((sample, index) => (
              <button key={sample.title} className="sample-card group" onClick={() => setNotice(`Đang xem ${sample.title}`)}>
                <img src={sample.image} alt={sample.title} loading="lazy" width={768} height={1376} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" style={{ objectPosition: sample.position }} />
                <span className="sample-overlay" />
                <span className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-overlay text-foreground"><AudioLines size={12} /></span>
                <span className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100"><span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-primary-foreground"><Play size={16} fill="currentColor" /></span></span>
                {index === 4 && <span className="absolute inset-x-2 top-1/2 -translate-y-1/2 text-center text-sm font-bold">Follow us for</span>}
                <span className="absolute inset-x-0 bottom-0 border-t border-border/60 bg-panel/90 px-2 py-2 text-left text-[10px] font-medium">{sample.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="projects-heading">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border">
            <div className="flex gap-5">
              {["Tất cả các dự án", "Dự án đã lưu", "Nháp"].map((tab) => (
                <button key={tab} onClick={() => setProjectTab(tab)} className={projectTab === tab ? "project-tab-active" : "project-tab"}>
                  {tab} <span className="text-subtle">({tab === "Tất cả các dự án" ? 6 : tab === "Dự án đã lưu" ? 0 : 5})</span>
                </button>
              ))}
            </div>
            <div className="flex gap-4 pb-2 text-[10px]">
              <button className={selected.length ? "text-brand" : "text-muted-foreground"} onClick={() => setSelected(selected.length === projects.length ? [] : projects.map((_, index) => index))}>Chọn nhiều</button>
              <button className="text-muted-foreground hover:text-foreground" onClick={() => setNotice("Đang hiển thị toàn bộ dự án")}>Xem tất cả</button>
            </div>
          </div>
          <h2 id="projects-heading" className="sr-only">Danh sách dự án</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {projects.map((project, index) => (
              <article key={`${project.name}-${index}`} className={selected.includes(index) ? "project-card-selected" : "project-card"}>
                <button className="relative block aspect-[16/9] w-full overflow-hidden" onClick={() => setNotice(`Đang mở ${project.name}`)}>
                  <img src={project.image} alt="" loading="lazy" width={768} height={1376} className="h-full w-full object-cover" />
                  <span className="absolute inset-0 bg-overlay/20" />
                  <span className="absolute left-2 top-2 rounded bg-overlay px-1.5 py-1 text-[8px]">Còn {index + 1} ngày</span>
                  {index < 2 && <span className="absolute inset-0 grid place-items-center"><span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-primary-foreground"><Play size={13} fill="currentColor" /></span></span>}
                </button>
                <div className="relative p-2.5 pr-8">
                  <p className="truncate text-[10px] font-semibold">{project.name}</p>
                  <p className="mt-1 text-[8px] text-muted-foreground">{project.meta} · Nhiều clip + Nhạc</p>
                  <button className="absolute right-2 top-2 text-subtle hover:text-brand" aria-label={`Chọn ${project.name}`} onClick={() => toggleProject(index)}>
                    {selected.includes(index) ? <Check size={15} /> : <Star size={14} />}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      {notice && (
        <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-md border border-brand/40 bg-popover px-4 py-3 text-xs shadow-panel">
          <Check size={15} className="text-brand" /><span>{notice}</span>
          <button aria-label="Đóng thông báo" onClick={() => setNotice("")} className="text-muted-foreground hover:text-foreground"><X size={14} /></button>
        </div>
      )}

      <button className="fixed bottom-5 left-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-muted-foreground bg-panel text-success shadow-panel transition hover:border-success" aria-label="Tải media lên" onClick={() => inputRef.current?.click()}>
        <Upload size={19} />
      </button>
    </main>
  );
}