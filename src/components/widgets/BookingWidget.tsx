"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  serviceType: z.string({
    required_error: "Please select a service type.",
  }),
  zipCode: z.string().min(5, {
    message: "Zip code must be at least 5 digits.",
  }),
})

interface BookingWidgetProps {
    children?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    triggerText?: string;
    triggerClassName?: string;
    triggerVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function BookingWidget({
    children,
    triggerText = "Book Free Strategy Call",
    triggerClassName,
    triggerVariant = "default"
}: BookingWidgetProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      zipCode: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would submit to an API
    console.log(values)
    alert("Thanks! We'll call you within 24 hours.");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Prefer props for the trigger to avoid hydration/ref issues with Astro slots */}
        {children ? (
             children
        ) : (
            <Button variant={triggerVariant} className={cn(triggerClassName)} data-event="book_widget_open">
                {triggerText}
            </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Your Free Strategy Call</DialogTitle>
          <DialogDescription>
            We’ll call you within 24 hours to discuss your marketing goals.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 555-5555" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input placeholder="john@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Service Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem value="lsa">Google LSAs</SelectItem>
                        <SelectItem value="gmb">GMB Optimization</SelectItem>
                        <SelectItem value="cro">CRO/Booking Optimization</SelectItem>
                        <SelectItem value="automation">Automation</SelectItem>
                        <SelectItem value="review">Review & Reputation</SelectItem>
                    </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )}
            />
             <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                    <Input placeholder="85001" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit" className="w-full">Book Call</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
