import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Separator } from "~/components/ui/separator"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "~/components/ui/hover-card"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "~/components/ui/tooltip"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Toaster } from "~/components/ui/sonner"
import { toast } from "sonner"
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "~/components/ui/breadcrumb"
import { Checkbox } from "~/components/ui/checkbox"
import { Label } from "~/components/ui/label"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "~/components/ui/dropdown-menu"
import { Popover, PopoverTrigger, PopoverContent } from "~/components/ui/popover"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/components/ui/select"
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "~/components/ui/table"
import { Toggle } from "~/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group"
import { Progress } from "~/components/ui/progress"
import { Slider } from "~/components/ui/slider"
import { Switch } from "~/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"

export function Welcome() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <TooltipProvider>
      <Toaster />
      <main className="min-h-screen bg-background p-6 text-foreground md:p-12">
        {/* ── Header ──────────────────────────────────────────── */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl">NEO BRUTAL</h1>
            <p className="mt-2 font-mono text-muted-foreground">
              // component showcase
            </p>
          </div>
          <Button onClick={toggleTheme} variant="outline" size="lg">
            {isDark ? "☀ LIGHT" : "● DARK"}
          </Button>
        </div>

        <Separator className="mb-12" />

        {/* ── Buttons ─────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">BUTTONS</h2>
          <div className="flex flex-wrap gap-4">
            <Button>DEFAULT</Button>
            <Button variant="outline">OUTLINE</Button>
            <Button variant="secondary">SECONDARY</Button>
            <Button variant="destructive">DESTRUCTIVE</Button>
            <Button variant="ghost">GHOST</Button>
            <Button variant="link">LINK</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button size="xs">TINY</Button>
            <Button size="sm">SMALL</Button>
            <Button size="default">DEFAULT</Button>
            <Button size="lg">LARGE</Button>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Badges ──────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">BADGES</h2>
          <div className="flex flex-wrap gap-3">
            <Badge>DEFAULT</Badge>
            <Badge variant="secondary">SECONDARY</Badge>
            <Badge variant="outline">OUTLINE</Badge>
            <Badge variant="destructive">DESTRUCTIVE</Badge>
            <Badge variant="accent">ACCENT</Badge>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Cards ───────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">CARDS</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>PROJECT ALPHA</CardTitle>
                <CardDescription>
                  A brutalist web application built with harsh lines and pure
                  contrast.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  No rounded corners. No soft shadows. Just raw, mechanical
                  design that demands attention.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">VIEW PROJECT →</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TERMINAL VIBES</CardTitle>
                <CardDescription>
                  Inspired by late-night coding sessions and CRT monitors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="accent">REACT</Badge>
                  <Badge variant="accent">TAILWIND</Badge>
                  <Badge variant="accent">TYPESCRIPT</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">
                  SOURCE CODE →
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DESIGN SYSTEM</CardTitle>
                <CardDescription>
                  Every element follows the brutalist manifesto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Thick borders. Solid shadows. Mechanical interactions. Zero
                  compromise.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">
                  EXPLORE →
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Tabs ────────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">TABS</h2>
          <div className="space-y-8">
            <Tabs defaultValue="about">
              <TabsList>
                <TabsTrigger value="about">ABOUT</TabsTrigger>
                <TabsTrigger value="skills">SKILLS</TabsTrigger>
                <TabsTrigger value="contact">CONTACT</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-4">
                <Card>
                  <CardContent className="pt-4">
                    <p>
                      I build things for the web. I like harsh aesthetics,
                      mechanical keyboards, and monospace fonts.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="skills" className="mt-4">
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>TYPESCRIPT</Badge>
                      <Badge>REACT</Badge>
                      <Badge>NODE.JS</Badge>
                      <Badge>RUST</Badge>
                      <Badge>NEOVIM</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="contact" className="mt-4">
                <Card>
                  <CardContent className="pt-4">
                    <p>
                      hello@brutalist.dev // github.com/brutalist
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div>
              <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Line Variant
              </p>
              <Tabs defaultValue="tab1">
                <TabsList variant="line">
                  <TabsTrigger value="tab1">OVERVIEW</TabsTrigger>
                  <TabsTrigger value="tab2">FEATURES</TabsTrigger>
                  <TabsTrigger value="tab3">CHANGELOG</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4 font-mono">
                  Raw, unfiltered design components.
                </TabsContent>
                <TabsContent value="tab2" className="mt-4 font-mono">
                  Zero blur. Zero rounding. Maximum impact.
                </TabsContent>
                <TabsContent value="tab3" className="mt-4 font-mono">
                  v1.0.0 — Initial brutalist release.
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Accordion ───────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">ACCORDION</h2>
          <Accordion className="max-w-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>WHAT IS NEO-BRUTALISM?</AccordionTrigger>
              <AccordionContent>
                Neo-brutalism is a design style characterized by bold colors,
                stark typography, thick borders, and intentionally raw
                aesthetics. It draws inspiration from the Brutalist architecture
                movement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>WHY NO ROUNDED CORNERS?</AccordionTrigger>
              <AccordionContent>
                Rounded corners signal softness and approachability. Neo-brutalism
                rejects this in favor of harsh, geometric precision. Every element
                is a deliberate statement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>WHY SOLID SHADOWS?</AccordionTrigger>
              <AccordionContent>
                Blurred shadows mimic natural light diffusion. Solid shadows are
                artificial, graphic, and unapologetically digital. They make
                elements feel like physical blocks on the screen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator className="mb-12" />

        {/* ── Form Inputs ─────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">INPUTS</h2>
          <div className="grid max-w-xl gap-4">
            <div>
              <label className="mb-2 block font-heading text-sm font-bold uppercase tracking-wider">
                Name
              </label>
              <Input placeholder="Enter your handle..." />
            </div>
            <div>
              <label className="mb-2 block font-heading text-sm font-bold uppercase tracking-wider">
                Email
              </label>
              <Input type="email" placeholder="user@terminal.sh" />
            </div>
            <div>
              <label className="mb-2 block font-heading text-sm font-bold uppercase tracking-wider">
                Message
              </label>
              <Textarea placeholder="Write something brutally honest..." />
            </div>
            <Button className="w-fit">SUBMIT →</Button>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Dialog ──────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">DIALOG</h2>
          <Dialog>
            <DialogTrigger render={<Button />}>OPEN DIALOG</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>CONFIRM ACTION</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Are you sure you want to
                  proceed with this brutally direct operation?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">CANCEL</Button>
                <Button>CONFIRM</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        <Separator className="mb-12" />

        {/* ── Hover Card & Tooltip ────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">HOVER CARD & TOOLTIP</h2>
          <div className="flex flex-wrap items-center gap-6">
            <HoverCard>
              <HoverCardTrigger
                render={
                  <Button variant="outline">HOVER ME</Button>
                }
              />
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-base">@BRUTALIST_DEV</h4>
                  <p className="text-sm text-muted-foreground">
                    Building harsh interfaces since 2024. No rounded corners
                    were harmed in the making of this profile.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="accent" className="text-[10px]">142 REPOS</Badge>
                    <Badge variant="outline" className="text-[10px]">2.4K STARS</Badge>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <Tooltip>
              <TooltipTrigger render={<Button variant="secondary">TOOLTIP</Button>} />
              <TooltipContent>
                I appear instantly. No smooth fading.
              </TooltipContent>
            </Tooltip>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Scroll Area ─────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">SCROLL AREA</h2>
          <div className="max-w-md border-[3px] border-border shadow-[var(--neo-shadow-offset)_var(--neo-shadow-offset)_0px_var(--neo-shadow-color)]">
            <ScrollArea className="h-48 p-4">
              <div className="space-y-4 font-mono text-sm">
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i}>
                    <span className="text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>{" "}
                    // Line {i + 1} of the scroll area content
                  </p>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Sonner Toast ────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">SONNER TOAST</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() =>
                toast.success("SYSTEM INITIALIZED", {
                  description: "All neo-brutalist parameters within acceptable ranges.",
                })
              }
            >
              SUCCESS TOAST
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                toast.error("CRITICAL FAILURE", {
                  description: "Rounded corners detected in sector 7G. Immediate action required.",
                })
              }
            >
              ERROR TOAST
            </Button>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Selection Controls ──────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">SELECTION CONTROLS</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold uppercase">Checkbox</h3>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold uppercase">Switch</h3>
              <div className="flex items-center gap-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold uppercase">Radio Group</h3>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Progress & Slider ──────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">PROGRESS & SLIDER</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold uppercase">Progress</h3>
              <Progress value={60} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold uppercase">Slider</h3>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Popovers & Menus ──────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">POPOVERS & MENUS</h2>
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Open Popover
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-heading uppercase font-bold">Dimensions</h4>
                    <p className="font-mono text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                Open Menu
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* ── Table ─────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">TABLE & TOGGLES</h2>
          <div className="mb-8 flex flex-wrap gap-4">
            <Toggle variant="outline">Toggle Me</Toggle>
            <ToggleGroup variant="outline" defaultValue={["a"]}>
              <ToggleGroupItem value="a">Option A</ToggleGroupItem>
              <ToggleGroupItem value="b">Option B</ToggleGroupItem>
              <ToggleGroupItem value="c">Option C</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <Separator className="mb-12" />

        {/* ── Marquee ─────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl">MARQUEE</h2>
          <div className="neo-marquee py-3 text-lg">
            <div className="neo-marquee-content">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="flex gap-8 px-4">
                  <span>REACT</span>
                  <span>★</span>
                  <span>TYPESCRIPT</span>
                  <span>★</span>
                  <span>TAILWIND</span>
                  <span>★</span>
                  <span>NEOVIM</span>
                  <span>★</span>
                  <span>RUST</span>
                  <span>★</span>
                  <span>NODE.JS</span>
                  <span>★</span>
                  <span>FIGMA</span>
                  <span>★</span>
                  <span>DOCKER</span>
                  <span>★</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────── */}
        <Separator className="mb-6" />
        <footer className="flex items-center justify-between font-mono text-sm text-muted-foreground">
          <p>© 2026 // BUILT WITH ZERO BLUR</p>
          <p>NEO-BRUTALIST DESIGN SYSTEM v1.0</p>
        </footer>
      </main>
    </TooltipProvider>
  )
}
