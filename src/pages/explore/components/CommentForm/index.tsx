import { Avatar } from "@/components/Avatar";
import { Rating } from "@/components/Rating";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Check, CircleNotch, X } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  CommentFormAction,
  CommentFormComponent,
  CommentFormHeader,
  CommentFormWrapper,
} from "./styles";

const CommentFormSchema = z.object({
  rate: z.number().min(1, "Avaliação obrigatória."),
  description: z
    .string()
    .min(3, "O comentário deve ter pelo menos 3 caracteres.")
    .max(450, "O comentário deve ter no máximo 450 caracteres."),
});

export type CommentFormData = z.infer<typeof CommentFormSchema>;

interface ICommentForm {
  setNewFormComment: Dispatch<SetStateAction<boolean>>;
  bookId: string;
}

async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

export function CommentForm({ setNewFormComment, bookId }: ICommentForm) {
  const { data } = useSession();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormData>({
    resolver: zodResolver(CommentFormSchema),
  });

  function countCharacters() {
    const comment = watch("description");

    return comment ? comment.match(/./g)!.length : 0;
  }

  const { mutateAsync: handleRate } = useMutation(
    async (data: CommentFormData) => {
      await api.post(`/books/${bookId}/rate`, data);
    }
  );

  async function handleNewComment(data: CommentFormData) {
    await handleRate(data);

    reset();

    setNewFormComment(false);
  }

  return (
    <CommentFormComponent>
      <CommentFormHeader>
        <Avatar
          avatarSize={40}
          imgUrl={data?.user.avatar_url}
          altText={`Avatar de ${data?.user.name}`}
        />
        <h4>{data?.user.name}</h4>
        <Controller
          name="rate"
          control={control}
          render={({ field }) => {
            return (
              <Rating
                starSize={28}
                rating={field.value}
                error={!!errors.rate}
                onChange={(rating) => field.onChange(rating)}
              />
            );
          }}
        />
      </CommentFormHeader>
      <CommentFormWrapper
        onSubmit={handleSubmit(handleNewComment)}
        error={!!errors.description}
      >
        <textarea
          placeholder="Escreva sua avaliação"
          {...register("description")}
        ></textarea>
        <span>{countCharacters()}/450</span>
        <CommentFormAction isSubmitting={isSubmitting}>
          <button type="button" onClick={() => setNewFormComment(false)}>
            <X size={24} color="#8381D9" weight="bold" />
          </button>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <CircleNotch size={24} color="#50B2C0" weight="bold" />
            ) : (
              <Check size={24} color="#50B2C0" weight="bold" />
            )}
          </button>
        </CommentFormAction>
      </CommentFormWrapper>
    </CommentFormComponent>
  );
}
